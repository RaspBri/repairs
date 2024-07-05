'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import FormNavigation from "./components/FormNavigation";
import { AppointmentFormState, SignupForm } from "../types";
import Diagnosis from "./components/Diagnosis";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import { fetchQuestions } from "../actions/appliance";
import { DiagnosisProps } from "./components/Diagnosis";
import { ScheduleProps } from "./components/Schedule";
import { ContactProps } from "./components/Contact";

// export const AppointmentFormStateToComponentMap: { [key in AppointmentFormState]: React.ReactNode } = {
//     [AppointmentFormState.DIAGNOSIS]: <Diagnosis />,
//     [AppointmentFormState.SCHEDULE]: <Schedule />,
//     [AppointmentFormState.CONTACT]: <Contact />
// };

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
    const questions = fetchQuestions(deviceId);
    const [formData, setFormData] = useState({
        diagnosis: {
            device: deviceId,
            manufacturer: manufacturerId,
            model: modelId,
            questions,
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
        if (state === AppointmentFormState.DIAGNOSIS) {
          return <Component formData={formData} questions={questions}  /> as React.ReactElement<DiagnosisProps>;
        }
        return <Component formData={formData} questions={questions} /> as React.ReactElement<ScheduleProps | ContactProps>;
      };

    const canGoNext = state !== AppointmentFormState.CONTACT;
    const canGoPrev = state !== AppointmentFormState.DIAGNOSIS;

    return (
        <div className="max-w-lg">   
            {renderState()}
            <FormNavigation
                onNext={() => handleNext()}
                onPrev={handlePrev} 
                canGoNext={canGoNext}
                canGoPrev={canGoPrev}
            />
        </div>
    );
}