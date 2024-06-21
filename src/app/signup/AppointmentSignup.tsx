import { useState, useContext, createContext, Dispatch } from "react";
import Diagnosis from "./Diagnosis";
import ScheduleAppointment from "./ScheduleAppointment";
import ContactInformation from "./ContactInformation";

enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

export const FormContext = createContext({
    form: {
        diagnosis: {
            deviceType: "",
            deviceMake: "",
            deviceModel: "",
            serialNumber: "",
            questions: [],
        },
        schedule: {},
        customer: {}
    },
    setFormFunction: () => {}
});

export default function AppointmentSignup() {
    const [form, setForm] = useState({
        diagnosis: {
            deviceType: "",
            deviceMake: "",
            deviceModel: "",
            serialNumber: "",
            questions: [],
        },
        schedule: {},
        customer: {}
    });

    const [appointmentFormState, setAppointmentFormState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);

    let formUI = appointmentFormState === 0 ? <Diagnosis /> : appointmentFormState === 1 ? <ScheduleAppointment /> : <ContactInformation />;

    const handleForward = () => {
        if (appointmentFormState <= 1) setAppointmentFormState(appointmentFormState + 1);
    }

    const handleBack = () => {
        if (appointmentFormState >= 1) setAppointmentFormState(appointmentFormState - 1);
    }

    return (
        <div className="max-w-lg m-auto my-20">
            <FormContext.Provider value={{ form, setForm }}>
                {formUI}
            </FormContext.Provider>
            <div>
                <button onClick={handleBack}>Go Back</button>
                <button onClick={handleForward}>Next</button>
            </div>
        </div>
    );
}