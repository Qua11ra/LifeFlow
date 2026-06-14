import { ZodError, z } from "zod";

type ZodObjectType = Record<string, z.ZodType>;
type OK = "ok";
type ErrorsObject = Record<string, string>;
export type ZodSchemaLayout = z.ZodObject<ZodObjectType>;

export default function validate(
    schema: ZodSchemaLayout,
    data: z.infer<typeof schema>,
): OK | ErrorsObject {
    try {
        schema.parse(data);
        return "ok";
    } catch (error) {
        const errorsObject: ErrorsObject = {};
        const errors = (error as ZodError).issues;

        for (const error of errors) {
            const field = error.path[0];

            if (!field) continue;

            errorsObject[String(field)] = error.message;
        }
        return errorsObject;
    }
}
//TODO fix tests