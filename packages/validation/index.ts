import validate, { type ZodSchemaLayout } from "./src/utils/validate";

export {
    LoginSchema,
    RegistrationSchema,
    type LoginSchemaType,
    type RegistrationSchemaType,
} from "./src/schemas/auth";

export { validate, ZodSchemaLayout };
