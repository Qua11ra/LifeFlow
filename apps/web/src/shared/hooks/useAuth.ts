import { useState } from "react";
import { validate, ZodSchemaLayout, LoginSchema, LoginSchemaType, RegistrationSchema, RegistrationSchemaType } from "@repo/validation"

type ErrorsObject = Record<string, string>;

export default function useAuth() {
    const [errors, setErrors] = useState<ErrorsObject | null>(null);

    function validateData(schema: ZodSchemaLayout, data: Record<string, unknown>) {
        const result = validate(schema, data);
        if (result === 'ok') {
            return true;
        } else {
            setErrors(result);
            return false;
        }
    }

    async function login<T extends keyof LoginSchemaType>(data: LoginSchemaType[T], step: T) {
        if (!validateData(LoginSchema[step], data)) return false;
        
        try {

        } catch (error) {
            console.error(error)
        }
    }

    async function registration<T extends keyof RegistrationSchemaType>(data: RegistrationSchemaType[T], step: T) {
        if (!validateData(RegistrationSchema[step], data)) return false;
        
        try {

        } catch (error) {
            console.error(error)
        }
    }

    return { login, registration, errors };
};