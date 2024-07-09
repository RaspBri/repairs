'use client';

<<<<<<< HEAD
/**
 * We need several things done in this component
 * 
 * We do not yet have the questions that are designed for each particular device, so this
 * needs to be built. There will be some questions that are asked for each and every device,
 * like "Does it turn on?" 
 * 
 * You can see in the FormContext that we're using a new Signup() to create our form. We're going to pass
 * the deviceId, manufacturerId, and modelId into this class constructor to preset these values. 
 * 
 * When the user selects an answer to the question in the Diagnosis form, we need to update the
 * form in real time. Here, we're  not just updating a string like all the other fields, we're
 * updating an array. So, think this through before beginning this task. Please review the onFormChange
 * and updateForm functions inside this component which are currently working with just the form objects
 * and strings. Reach out to me if you have any questions.
 */

import { useState } from "react";
=======
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
>>>>>>> 631d750a2b0fc67445bc8689c8b2ec1bbdaca8b5
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