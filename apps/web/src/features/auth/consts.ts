import { IAuthFields, InputField } from "./types";

export const LOGIN_FIELDS: InputField[] = [
    {type: "email", placeholder: "Email", validateFn: validateEmail},
    {type: "password", placeholder: "Password", value: ""},
]

export const REGISTRATION_FIELDS: IAuthFields = {
    "1": [
        {type: "text", placeholder: "Name", value: ""},
        {type: "email", placeholder: "Email", value: ""},
        {type: "password", placeholder: "Password", value: ""},
        {type: "password", placeholder: "Confirm Password", value: ""},
    ],
    "2": [
        {type: "file", placeholder: "Avatar", value: ""},
    ]
}