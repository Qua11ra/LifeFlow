export type InputField = {
    name: string;
    type: "text" | "email" | "password" | "file";
    placeholder: string;
};

export type IAuthFields = Record<string, InputField[]>;