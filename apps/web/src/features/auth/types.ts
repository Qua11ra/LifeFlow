export type FieldType = "text" | "email" | "password" | "file";

export type AuthField = {
    name: string;
    type: FieldType;
    placeholder: string;
};
