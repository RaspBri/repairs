'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import FormNavigation from "./components/FormNavigation";
import { AppointmentFormState, SignupForm } from "../types";
import Diagnosis from "./components/Diagnosis";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import { getQuestions } from "../actions/appliance";
import { DiagnosisProps } from "./components/Diagnosis";
import { ScheduleProps } from "./components/Schedule";
import { ContactProps } from "./components/Contact";
import { Question } from "../types";

export const AppointmentFormStateToComponentMap = {
    [AppointmentFormState.DIAGNOSIS]: (props: DiagnosisProps) => <Diagnosis {...props} />,
    [AppointmentFormState.SCHEDULE]: (props: ScheduleProps) => <Schedule {...props} />,
    [AppointmentFormState.CONTACT]: (props: ContactProps) => <Contact {...props} />,
  };

export default function AppointmentSignup() {
    const params = useSearchParams();
    const deviceId = params.get("deviceId") as string;
    const manufacturerId = params.get("manufacturerId") as string;
    const modelId = params.get("modelId") as string;
    const [state, setState] = useState(0);
    const [formData, setFormData] = useState({
        diagnosis: {
            device: deviceId,
            manufacturer: manufacturerId,
            model: modelId,
            questions: [] as Question[] | [],
        },
        schedule: {},
        contact: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            state: "",
            zipcode: ""
        }
    });

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const Qs = await getQuestions(formData.diagnosis.device);
                setFormData((prev) => {
                    return {
                        ...prev,
                        diagnosis: {
                            ...prev.diagnosis,
                            questions: Qs
                        }
                    }
                });
            } catch(err) {
                console.error(err);
            }
            
        }

        fetchQuestions()
    }, []);

    const handleNext = () => {
        setState((prevStep) => {
            if (prevStep === AppointmentFormState.DIAGNOSIS) return AppointmentFormState.SCHEDULE;
            if (prevStep === AppointmentFormState.SCHEDULE) return AppointmentFormState.CONTACT;
            return prevStep;
        });
    };
    
    const handlePrev = () => {
        setState((prevStep) => {
            if (prevStep === AppointmentFormState.CONTACT) return AppointmentFormState.SCHEDULE;
            if (prevStep === AppointmentFormState.SCHEDULE) return AppointmentFormState.DIAGNOSIS;
            return prevStep;
        });
    };
    
    const handleSubmit = (data: SignupForm) => {
        setFormData((prev) => ({ ...prev, ...data }));
        // Handle form submission logic here
    };

    const renderState = () => {
        const Component = AppointmentFormStateToComponentMap[state as AppointmentFormState];
        return <Component formData={formData} />;
    };

    const canGoNext = state !== AppointmentFormState.CONTACT;
    const canGoPrev = state !== AppointmentFormState.DIAGNOSIS;

    return (
        <div className="max-w-lg">   
            {renderState()}
            <FormNavigation
                onNext={handleNext}
                onPrev={handlePrev} 
                onSubmit={handleSubmit}
                canGoNext={canGoNext}
                canGoPrev={canGoPrev}
                formData={formData}
            />
        </div>
    );
}