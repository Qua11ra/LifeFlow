"use client";
import { LoginSchema, validate } from "@repo/validation";
import { useState } from "react";

type ErrorsObject = Record<string, string>;

export default function useLoginForm() {
    const [errors, setErrors] = useState<ErrorsObject | null>(null);
    const [progress, setProgress] = useState(0);

    async function submit(formData: FormData) {
        setErrors(null);
        const data = Object.fromEntries(formData);
        const result = validate(LoginSchema[1], data);

        if (result !== "ok") {
            setErrors(result);
            setProgress(0);
            return false;
        }

        setProgress(100);
        return true;
    }

    return { errors, progress, submit };
}
