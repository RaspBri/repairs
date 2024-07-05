interface FormNavigationProps {
    onNext: () => void,
    onPrev: () => void,
    canGoNext: boolean;
    canGoPrev: boolean;
}

export default function FormNavigation({ onNext, onPrev, canGoNext, canGoPrev }: FormNavigationProps) {
    return (
        <div>
            {canGoPrev && <button onClick={onPrev}>Back</button>}
            {canGoNext && <button onClick={onNext}>Next</button>}
        </div>
    );
}