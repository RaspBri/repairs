import { useState, useContext, createContext, Dispatch } from "react";
import Diagnosis from "./Diagnosis";
import ScheduleAppointment from "./ScheduleAppointment";
import ContactInformation from "./ContactInformation";

enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

type Question = {}

type DiagnosisForm = {
    deviceType: string,
    deviceMake: string,
    deviceModel: string,
    serialNumber: string,
    questions: Question[],
}

type ScheduleForm = {}

type ContactInformationForm = {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zipcode: string;
}

type SignupForm = {
    diagnosis: DiagnosisForm;
    schedule: ScheduleForm;
    contact: ContactInformationForm;
}

class Signup implements SignupForm {
    diagnosis: DiagnosisForm;
    schedule: ScheduleForm;
    contact: ContactInformationForm;

    constructor() {
        this.diagnosis = {
            deviceType: "",
            deviceMake: "",
            deviceModel: "",
            serialNumber: "",
            questions: [], 
        },   
        this.schedule = {

        },
        this.contact = {
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
    }
}

type FormContextType = {
    form: Signup;
    onFormChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>  void
}

export const FormContext = createContext<FormContextType>({
    form: new Signup(),
    onFormChange: () => {}
});

export default function AppointmentSignup() {
    const [appointmentFormState, setAppointmentFormState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);
    const [form, setForm] = useState(new Signup());
    
    const updateForm = (section: keyof SignupForm, name: string, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [section]: {
                ...prevForm[section],
                [name]: value
            }
        }));
    }

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = 'target' in e ? e.target : e;
        console.log(e);
        switch(appointmentFormState) {
            case AppointmentFormState.DIAGNOSIS:
                updateForm('diagnosis', name, value);
                break;
            case AppointmentFormState.SCHEDULE:
                updateForm('schedule', name, value);
                break;
            case AppointmentFormState.CONTACT:
                updateForm('contact', name, value);
                break;
        }
    }

    let formUI: React.ReactNode;
    switch(appointmentFormState) {
        case AppointmentFormState.DIAGNOSIS:
            formUI = <Diagnosis />;
            break;
        case AppointmentFormState.SCHEDULE:
            formUI = <ScheduleAppointment />;
            break;
        case AppointmentFormState.CONTACT:
            formUI = <ContactInformation />;
            break;
    }          

    const handleForward = () => (appointmentFormState <= 1) && setAppointmentFormState(appointmentFormState + 1);

    const handleBack = () => (appointmentFormState >= 1) && setAppointmentFormState(appointmentFormState - 1);

    return (
        <div className="max-w-lg m-auto my-20">
            <FormContext.Provider value={{ form, onFormChange }}>
                {formUI}
            </FormContext.Provider>
            <div>
                <button onClick={handleBack}>Go Back</button>
                <button onClick={handleForward}>Next</button>
            </div>
        </div>
    );
}