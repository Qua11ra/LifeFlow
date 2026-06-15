import type { AuthField } from "./types";

export const LOGIN_FIELDS: AuthField[] = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
];

export const REGISTRATION_FIELDS: AuthField[][] = [
    [
        { name: "name", type: "text", placeholder: "Name" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "password", type: "password", placeholder: "Password" },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
        },
    ],
    [{ name: "avatar", type: "file", placeholder: "Avatar" }],
];
