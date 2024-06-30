'use client';

import { useState, createContext } from "react";
import FormNavigation from "./FormNavigation";
import { AppointmentFormState, FormContextType, SignupForm } from "../types";
import { Signup } from "../classes";
import Diagnosis from "./components/Diagnosis";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";

export const AppointmentFormStateToComponentMap: { [key in AppointmentFormState]: React.ReactElement } = {
    [AppointmentFormState.DIAGNOSIS]: <Diagnosis />,
    [AppointmentFormState.SCHEDULE]: <Schedule />,
    [AppointmentFormState.CONTACT]: <Contact />
};

export const AppointmentFormStateToSignupFormMap: { [key in AppointmentFormState]: keyof SignupForm } = {
    [AppointmentFormState.DIAGNOSIS]: 'diagnosis',
    [AppointmentFormState.SCHEDULE]: 'schedule',
    [AppointmentFormState.CONTACT]: 'contact'
};

export const FormContext = createContext<FormContextType>({
    form: new Signup(),
    onFormChange: () => {},
    appointmentFormState: 0,
    setAppointmentFormState: () => {}
});

export default function AppointmentSignup() {
    const [appointmentFormState, setAppointmentFormState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);
    const [form, setForm] = useState(new Signup());

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = 'target' in e ? e.target : e;
        updateForm(name, value);
    }

    const updateForm = (name: string, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [AppointmentFormStateToSignupFormMap[appointmentFormState]]: {
                ...prevForm[AppointmentFormStateToSignupFormMap[appointmentFormState]],
                [name]: value
            }
        }));
    }

    return (
        <div className="max-w-lg">
            {/* <form action={submitForm}> */}
                <FormContext.Provider value={{ form, onFormChange, appointmentFormState, setAppointmentFormState }}>
                    {AppointmentFormStateToComponentMap[appointmentFormState]}
                    <FormNavigation />
                </FormContext.Provider>
                
            {/* </form> */}
        </div>
    );
}