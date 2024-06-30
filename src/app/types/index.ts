import { Signup } from "../classes"

export enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

export type Question = {}

export type DiagnosisForm = {
    deviceType: string,
    deviceMake: string,
    deviceModel: string,
    serialNumber: string,
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