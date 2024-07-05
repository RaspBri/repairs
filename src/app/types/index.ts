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

export enum DeviceMakeModel {
    DEVICE = "device",
    MANUFACTURER = "manufacturer",
    MODEL = "model"
}

export type KeyFormState = Diagnosis | Schedule | Contact;

export type Question = {
    id: string;
    question: string;
    answers: Answer[];
}

export type Answer = {
    id: string;
    option: string;
}

export type Diagnosis = {
    device: string,
    manufacturer: string,
    model: string,
    questions: Question[],
}

export type Schedule = {}

export type Contact = {
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
    diagnosis: Diagnosis;
    schedule: Schedule;
    contact: Contact;
}