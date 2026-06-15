'use client';
import { RegistrationSchema, validate } from "@repo/validation";
import { useCallback, useState } from "react";

type ErrorsObject = Record<string, string>;

type UseRegistrationFormReturn = {
    errors: ErrorsObject | null;
    step: number;
    progress: number;
    next: (formData: FormData) => boolean;
    back: () => void;
    submit: (formData: FormData) => boolean;
};

export default function useRegistrationForm(): UseRegistrationFormReturn {
    const [errors, setErrors] = useState<ErrorsObject | null>(null);
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    const next = useCallback((formData: FormData) => {
        const data = Object.fromEntries(formData);
        const result = validate(RegistrationSchema[1], data);

        if (result === "ok") {
            setErrors(null);
            setStep(2);
            setProgress(50);
            return true;
        }
        console.log(result);

        setErrors(result);
        return false;
    }, []);

    const back = useCallback(() => {
        setStep((s) => Math.max(1, s - 1));
    }, []);

    const submit = useCallback((formData: FormData) => {
        const data = Object.fromEntries(formData);
        const result = validate(RegistrationSchema[2], data);

        if (result === "ok") {
            setErrors(null);
            setProgress(100);
            return true;
        }

        setErrors(result);
        return false;
    }, []);

    return { errors, step, progress, next, back, submit };
}
