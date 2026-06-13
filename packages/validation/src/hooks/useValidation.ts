import { z } from "zod";

type ZodObjectType = Record<string, z.ZodType>;
type Data = Record<string, unknown>;
export default function useValidation<T extends ZodObjectType>(
    schema: z.ZodObject<T>,
) {
    function validate(data: Data) {
        try {
            return schema.parse(data);
        } catch (error) {
            if (error instanceof z.ZodError) {
                return error.message;
            }
        }
    }

    return validate;
}
