'use client';
import { LoginSchema, validate } from "@repo/validation";
import { useCallback, useState } from "react";

type ErrorsObject = Record<string, string>;

type UseLoginFormReturn = {
    errors: ErrorsObject | null;
    progress: number;
    submit: (formData: FormData) => boolean;
};

export default function useLoginForm(): UseLoginFormReturn {
    const [errors, setErrors] = useState<ErrorsObject | null>(null);
    const [progress, setProgress] = useState(0);

    const submit = useCallback((formData: FormData) => {
        const data = Object.fromEntries(formData);
        const result = validate(LoginSchema[1], data);

        if (result === "ok") {
            setErrors(null);
            setProgress(100);
            return true;
        }

        setErrors(result);
        setProgress(0);
        return false;
    }, []);

    return { errors, progress, submit };
}
