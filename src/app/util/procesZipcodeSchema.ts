import { z } from "zod"

export const processZipcodeSchema = z.object({
    zipcode: z.string().min(5, { message: "Please enter a valid zipcode (Length of 5)" }).regex(/^\d+$/, { message: 'Must be a valid zipcode (Numbers 0-9)' }),
});