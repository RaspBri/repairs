import { Signup } from "../classes"

/*******************************************************
 * *****************************************************
 * ******************* DEVICE DATA *********************
 * *****************************************************
 ******************************************************/

export type Device = {
    deviceId: string;
    deviceName: string;
}

export type Manufacturer = {
    manufacturerId: string;
    manufacturerName: string;
}

export type Model = {
    modelId: string;
    modelName: string,
    manufacturerId: string,
    deviceId: string,
    releasedDate: string
}

/*******************************************************
 * *****************************************************
 * ****************** SIGNUP FORM **********************
 * *****************************************************
 ******************************************************/

export enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

export type Question = {
    id: string;
    name: string;
    question: string;
    answers: string[];
}

export type DiagnosisForm = {
    device: string,
    manufacturer: string,
    model: string,
    questions: Question[],
}

export type ScheduleForm = {}

export type ContactInformationForm = {
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

export type SignupForm = {
    diagnosis: DiagnosisForm;
    schedule: ScheduleForm;
    contact: ContactInformationForm;
}

export type FormContextType = {
    form: Signup;
    onFormChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>  void;
    appointmentFormState: AppointmentFormState;
    setAppointmentFormState: React.Dispatch<React.SetStateAction<AppointmentFormState>>;
}