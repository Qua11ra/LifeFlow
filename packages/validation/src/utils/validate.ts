import { ZodError, z } from "zod";

type OK = "ok";
type ErrorsObject = Record<string, string>;

export default function validate<T extends z.ZodType>(
    schema: T,
    data: z.input<T>,
): OK | ErrorsObject {
    console.log("validate", schema, data);
    try {
        schema.parse(data);
        return "ok";
    } catch (error) {
        const errorsObject: ErrorsObject = {};
        const entries = (error as ZodError).issues;

        for (const entry of entries) {
            const field = entry.path[0];

            if (!field) continue;

            errorsObject[String(field)] = entry.message;
        }
        return errorsObject;
    }
}