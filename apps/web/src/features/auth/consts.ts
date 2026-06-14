import { IAuthFields, InputField } from "./types";

export const LOGIN_FIELDS: InputField[] = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
];

export const REGISTRATION_FIELDS: IAuthFields = {
    "1": [
        { name: "name", type: "text", placeholder: "Name" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "password", type: "password", placeholder: "Password" },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
        },
    ],
    "2": [{ name: "avatar", type: "file", placeholder: "Avatar" }],
};
