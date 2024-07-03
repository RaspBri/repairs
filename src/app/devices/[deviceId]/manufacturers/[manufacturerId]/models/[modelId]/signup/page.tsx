'use client';

/**
 * We need several things done in this component
 * 
 * The first thing is by the time we get to this page, the customer has already selected
 * their device, manufacturer, and model. Because of this, we need to pull the deviceId 
 * off the url and use this to select which set of questions we're going to ask in the
 * Diagnosis component. 
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

import { useState, createContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import FormNavigation from "./components/FormNavigation";
import { AppointmentFormState, SignupForm, FormContextType } from "../../../../../../../types";
import { Signup } from "../../../../../../../classes";
import Diagnosis from "./components/Diagnosis";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import { Question } from "../../../../../../../types";

export const FormContext = createContext<FormContextType>({
    form: {
        diagnosis: {
            device: "",
            manufacturer: "",
            model: "",
            questions: [], 
        },   
        schedule: {

        },
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
    },
    onFormChange: () => {},
    appointmentFormState: 0,
    setAppointmentFormState: () => {},
    updateQuestions: () => {}
});

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

export default function AppointmentSignup() {
    const path = usePathname();
    const pathSplit = path.split("/");
    console.log(pathSplit)
    
    const [appointmentFormState, setAppointmentFormState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);
    const [form, setForm] = useState(() => new Signup(
        (pathSplit[2] as string) || "", 
        (pathSplit[4] as string) || "", 
        (pathSplit[6] as string) || ""
    ));

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = 'target' in e ? e.target : e;
        updateForm(name, value);
    }

    const updateForm = (name: string, value: any) => {
        setForm(prevForm => ({
            ...prevForm,
            [AppointmentFormStateToSignupFormMap[appointmentFormState]]: {
                ...prevForm[AppointmentFormStateToSignupFormMap[appointmentFormState]],
                [name]: value
            }
        }));
    }

    const updateQuestions = (questions: Question[]) => {
        setForm(prevForm => ({
            ...prevForm,
            diagnosis: {
                ...prevForm.diagnosis,
                questions
            }
        }));
    }

    return (
        <div className="max-w-lg">
            {/* <form action={submitForm}> */}
                <FormContext.Provider value={{ form, onFormChange, appointmentFormState, setAppointmentFormState, updateQuestions }}>
                    {AppointmentFormStateToComponentMap[appointmentFormState]}
                    <FormNavigation />
                </FormContext.Provider>
                
            {/* </form> */}
        </div>
    );
}