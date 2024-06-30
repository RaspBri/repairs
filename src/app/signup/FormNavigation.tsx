import { Button } from "@nextui-org/react";
import { FormContext } from "./ServicableSignup";
import { useContext } from "react";

enum AppointmentFormState {
    DIAGNOSIS,
    SCHEDULE,
    CONTACT
}

export default function FormNavigation() {
    const { appointmentFormState, setAppointmentFormState } = useContext(FormContext);

    const handleForward = () => (appointmentFormState <= AppointmentFormState.SCHEDULE) && setAppointmentFormState(appointmentFormState + 1);
    const handleBack = () => (appointmentFormState >= AppointmentFormState.SCHEDULE) && setAppointmentFormState(appointmentFormState - 1);
    const backButtonRequired = appointmentFormState >= AppointmentFormState.SCHEDULE;
    const nextOrSubmit = appointmentFormState <= AppointmentFormState.SCHEDULE;

    return (
        <div className={`flex ${appointmentFormState === AppointmentFormState.DIAGNOSIS ? 'justify-end' : 'justify-between'} py-3`}>
            {backButtonRequired && <Button color="primary" onClick={handleBack}>Go Back</Button>}
            {nextOrSubmit ? 
                <Button color="primary" onClick={handleForward}>Next</Button> :
                <Button color="primary" type="submit">Submit</Button>
            }
        </div>
    );
}