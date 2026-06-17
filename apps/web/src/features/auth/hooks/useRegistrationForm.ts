"use client";
import { RegistrationSchema, validate } from "@repo/validation";
import { useCallback, useState } from "react";

type ErrorsObject = Record<string, string>;

export default function useRegistrationForm() {
    const [errors, setErrors] = useState<ErrorsObject | null>(null);
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);

    function next(formData: FormData) {
        setErrors(null);
        const data = Object.fromEntries(formData);
        const result = validate(RegistrationSchema[1], data);

        if (result !== "ok") {
            setErrors(result);
            return false;
        }
        
        setProgress(50);
        setStep(2);
        return true;
    };

    const back = useCallback(() => {
        setStep((s) => Math.max(1, s - 1));
    }, []);

    async function submit(formData: FormData) {
        setErrors(null);
        const data = Object.fromEntries(formData);
        const result = validate(RegistrationSchema[2], data);

        if (result !== "ok") {
            setErrors(result);
            return false;
        }

        setProgress(100);
        return true;
    };

    return { errors, step, progress, next, back, submit };
}
