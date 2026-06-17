import z from "zod";

const DreamSchema = z.object({
    title: z.string().trim().min(1, "Title must be at least 1 characters"),
    description: z.string().trim().min(1, "Description must be at least 1 characters").max(50, "Description must be at most 50 characters"),
})

const StepSchema = z.object({
    title: z.string().trim().min(1, "Title must be at least 1 characters"),
    description: z.string().trim().min(1, "Description must be at least 1 characters").max(50, "Description must be at most 50 characters"),
})

const TaskSchema = z.object({
    title: z.string().trim().min(1, "Title must be at least 1 characters")
})

const NoteSchema = z.object({
    text: z.string().trim().min(1, "Text must be at least 1 characters")
})

type DreamSchemaType = z.infer<typeof DreamSchema>
type StepSchemaType = z.infer<typeof StepSchema>
type TaskSchemaType = z.infer<typeof TaskSchema>
type NoteSchemaType = z.infer<typeof NoteSchema>

export {
    DreamSchema,
    StepSchema,
    TaskSchema,
    NoteSchema,
    type DreamSchemaType,
    type StepSchemaType,
    type TaskSchemaType,
    type NoteSchemaType
}