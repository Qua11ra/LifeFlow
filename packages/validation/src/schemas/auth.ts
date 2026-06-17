import { ZodObject, z } from "zod";

const PASSWORD_SCHEMA =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]{8,}$/;

const Login1StepSchema = z.object({
    email: z.email("Invalid email"),
    password: z
        .string()
        .trim()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password is too safe :)")
        .regex(
            PASSWORD_SCHEMA,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
        ),
});

const Registration1StepSchema = z
    .object({
        name: z.string().trim().min(3, "Name must be at least 3 characters").max(50, "Name must be at most 50 characters"),
        email: z.email("Invalid email"),
        password: z
            .string()
            .trim()
            .min(8, "Password must be at least 8 characters")
            .max(50, "Password is too safe :)")
            .regex(
                PASSWORD_SCHEMA,
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
            ),
        confirmPassword: z
            .string()
            .trim()
            .min(8, "Password must be at least 8 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: "Passwords do not match",
        path: ["confirmPassword"],
    });

const Registration2StepSchema = z.object({
    avatar: z.preprocess(
        (val) => {
            if (val instanceof File && val.size === 0) return undefined;
            return val;
        },
        z
            .file()
            .max(5 * 1024 * 1024, "File size too large")
            .mime(["image/jpeg", "image/png"], "Invalid file type")
            .optional(),
    ),
});

interface LoginDataTypeMap {
    1: z.infer<typeof Login1StepSchema>;
}

interface RegistrationDataTypeMap {
    1: z.infer<typeof Registration1StepSchema>;
    2: z.infer<typeof Registration2StepSchema>;
}

export const LoginSchema: {
    [K in keyof LoginDataTypeMap]: ZodObject;
} = {
    1: Login1StepSchema,
};

export const RegistrationSchema: {
    [K in keyof RegistrationDataTypeMap]: ZodObject;
} = {
    1: Registration1StepSchema,
    2: Registration2StepSchema,
};

export type LoginSchemaType = LoginDataTypeMap;
export type RegistrationSchemaType = RegistrationDataTypeMap;
