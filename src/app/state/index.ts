import { createContext } from "react";
import { FormContextType } from "../types";

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
    setAppointmentFormState: () => {}
});