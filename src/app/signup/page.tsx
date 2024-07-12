'use client';
// Functionality
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getQuestions } from "../actions/appliance";
// Components
import FormNavigation from "./components/FormNavigation";
import Diagnosis, { DiagnosisProps } from "./components/Diagnosis";
import Schedule, { ScheduleProps } from "./components/Schedule";
import Contact, { ContactProps } from "./components/Contact";
// Definitions
import { 
    AppointmentFormState, 
    SignupForm, 
    Question 
} from "../types";

export const AppointmentFormStateToComponentMap = {
    [AppointmentFormState.DIAGNOSIS]: (props: DiagnosisProps) => <Diagnosis {...props} />,
    [AppointmentFormState.SCHEDULE]: (props: ScheduleProps) => <Schedule {...props} />,
    [AppointmentFormState.CONTACT]: (props: ContactProps) => <Contact {...props} />,
};

export const AppointmentFormStateToFormFieldMap = {
    [AppointmentFormState.DIAGNOSIS]: (props: DiagnosisProps) => <Diagnosis {...props} />,
    [AppointmentFormState.SCHEDULE]: (props: ScheduleProps) => <Schedule {...props} />,
    [AppointmentFormState.CONTACT]: (props: ContactProps) => <Contact {...props} />,
}

export default function AppointmentSignup() {
    const params = useSearchParams();
    const deviceId = params.get("deviceId") as string;
    const manufacturerId = params.get("manufacturerId") as string;
    const modelId = params.get("modelId") as string;
    const [formState, setState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);
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

    const handleFormUpdate = (
        e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData((prev) => {
            return {
                ...prev,
                [formState]: {
                    ...prev[formState],
                    [e.target.name]: e.target.value
                }
            }
        })
    }

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

    const renderComponentFromState = () => {
        const Component = AppointmentFormStateToComponentMap[formState];
        return <Component formData={formData} handleFormUpdate={handleFormUpdate} />;
    };

    const canGoNext = formState !== AppointmentFormState.CONTACT;
    const canGoPrev = formState !== AppointmentFormState.DIAGNOSIS;

    return (
        <div className="max-w-lg">   
            {renderComponentFromState()}
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