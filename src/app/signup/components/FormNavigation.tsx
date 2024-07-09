'use client';

import { SignupForm } from "@/app/types";

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
        <div>
            {canGoPrev && <button onClick={onPrev}>Back</button>}
            {canGoNext && <button onClick={onNext}>Next</button>}
            {!canGoNext && <button onClick={() => onSubmit(formData)}>Submit</button>}
        </div>
    );
}