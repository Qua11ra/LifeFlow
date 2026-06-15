import validate from "./validate";
import { LoginSchema } from "../schemas/auth";

const CORRECT_DATA = {
    email: "test@example.com",
    password: "Password123!",
};

const INCORRECT_DATA = {
    email: "test",
    password: "123",
};

describe("validate", () => {
    test("should return 'ok' for valid data", () => {
        const result = validate(LoginSchema[1], CORRECT_DATA);
        expect(result).toBe("ok");
    });

    test("should return errors for invalid data", () => {
        const result = validate(LoginSchema[1], INCORRECT_DATA);
        expect(typeof result).toBe("object");
        expect(result).not.toBe("ok");
    });
});
