import { useState } from "react";
import Diagnosis from "./Diagnosis";
import ScheduleAppointment from "./ScheduleAppointment";
import ContactInformation from "./ContactInformation";

enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

export default function AppointmentSignup() {
    const [appointmentFormState, setAppointmentFormState] = useState<AppointmentFormState>(AppointmentFormState.DIAGNOSIS);

    let formUI = appointmentFormState === 0 ? <Diagnosis /> : appointmentFormState === 1 ? <ScheduleAppointment /> : <ContactInformation />;

    const handleForward = () => {
        if (appointmentFormState <= 1) setAppointmentFormState(appointmentFormState + 1);
    }

    const handleBack = () => {
        if (appointmentFormState >= 1) setAppointmentFormState(appointmentFormState - 1);
    }

    return (
        <div>
            {formUI}
            <div>
                <button onClick={handleBack}>Go Back</button>
                <button onClick={handleForward}>Next</button>
            </div>
        </div>
    );
}