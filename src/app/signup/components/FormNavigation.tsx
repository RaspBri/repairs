import { SignupForm } from "@/app/types";
import {Button} from "@nextui-org/react";

interface FormNavigationProps {
    onNext: () => void,
    onPrev: () => void,
    onSubmit: (data: SignupForm) => void;
    canGoNext: boolean;
    canGoPrev: boolean;
    formData: SignupForm;
}

export default function FormNavigation({ onNext, onPrev, onSubmit, canGoNext, canGoPrev, formData }: FormNavigationProps) {
    return (
        <div className="flex space-x-40">
            {canGoPrev && <Button color="warning" onClick={onPrev}>Back</Button>}
            {canGoNext && <Button color="warning" onClick={onNext}>Next</Button>}
            {!canGoNext && <Button color="warning" onClick={() => onSubmit(formData)}>Submit</Button>}
        </div>
    );
}
