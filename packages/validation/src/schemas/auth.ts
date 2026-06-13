import { z } from "zod";

const PASSWORD_SCHEMA =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const LoginSchema = z.object({
    email: z.email("Invalid email"),
    password: z
        .string()
        .trim()
        .min(8, "Password must be at least 8 characters")
        .regex(
            PASSWORD_SCHEMA,
            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
        ),
});

const RegistrationSchema = z
    .object({
        name: z.string().trim().min(3, "Name must be at least 3 characters"),
        email: z.email("Invalid email"),
        password: z
            .string()
            .trim()
            .min(8, "Password must be at least 8 characters")
            .regex(
                PASSWORD_SCHEMA,
                "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
            ),
        confirmPassword: z
            .string()
            .trim()
            .min(8, "Password must be at least 8 characters"),
        avatar: z
            .file()
            .max(5 * 1024 * 1024, "File size too large")
            .mime(["image/jpeg", "image/png"], "Invalid file type")
            .optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: "Passwords do not match",
        path: ["confirmPassword"],
    });

type LoginSchemaType = z.infer<typeof LoginSchema>;
type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;

export {
    LoginSchema,
    RegistrationSchema,
    type LoginSchemaType,
    type RegistrationSchemaType,
};
