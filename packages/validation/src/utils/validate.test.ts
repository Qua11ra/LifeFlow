import useValidation from "./useValidation";
import { LoginSchema, LoginSchemaType } from "../schemas/auth";

const { validate } = useValidation(LoginSchema);

const CORRECT_DATA: LoginSchemaType = {
    email: "5t9Mw@example.com",
    password: "Password123!",
};

const INCORRECT_DATA: LoginSchemaType = {
    email: "test",
    password: "123",
};

const validData = 'ok'; //data is valid

describe('useValidation should work', () => {
    test('validate should validate valid data correctly', () => {
        const result = validate(CORRECT_DATA);
        expect(result).toBe(validData);
    })

    test('validate should validate invalid data correctly', () => {
        const result = validate(INCORRECT_DATA);
        console.log("result ", result);
        const isGood = Array.isArray(result) // if result is an array (ZodError.issues), it means validation failed

        expect(isGood).toBe(true);
    })
});