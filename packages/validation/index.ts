import validate from "./src/utils/validate";

export {
    LoginSchema,
    RegistrationSchema,
    type LoginSchemaType,
    type RegistrationSchemaType,
} from "./src/schemas/auth";

export {
    DreamSchema,
    NoteSchema,
    StepSchema,
    TaskSchema,
    type DreamSchemaType,
    type NoteSchemaType,
    type StepSchemaType,
    type TaskSchemaType
} from "./src/schemas/entities"

export { validate };
