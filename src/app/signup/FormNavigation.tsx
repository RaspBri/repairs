import { Button } from "@nextui-org/react";

export default function FormNavigation() {
    

    const handleForward = () => (appointmentFormState <= 1) && setAppointmentFormState(appointmentFormState + 1);

    const handleBack = () => (appointmentFormState >= 1) && setAppointmentFormState(appointmentFormState - 1);

    return (
        <div>
            <Button color="primary" onClick={handleBack}>Go Back</Button>
            <Button color="primary" onClick={handleForward}>Next</Button>
        </div>
    );
}