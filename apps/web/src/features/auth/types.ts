export type InputField = {
    type: "text" |"email" | "password" | "file",
    placeholder: string,
    validateFn: (...args: string[]) => boolean;
}

export type IAuthFields = Record<string, InputField[]>