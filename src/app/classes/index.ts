import {
    SignupForm, 
    DiagnosisForm, 
    ScheduleForm,
    ContactInformationForm 
} from "../types";

/**
 * We need to generate our list of questions based on the deviceId passed into the
 * Questions class.
 * 
 * To do this, we need a Questions class that generates this list.
 */

export class Signup implements SignupForm {
    diagnosis: DiagnosisForm;
    schedule: ScheduleForm;
    contact: ContactInformationForm;

    constructor(deviceId: string, manufacturerId: string, modelId: string) {
        this.diagnosis = {
            device: deviceId,
            manufacturer: manufacturerId,
            model: modelId,
            questions: new Questions(deviceId),
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