import { z } from "zod"

export const processZipcodeSchema = z.object({
    zipcode: z.string().min(5, { message: "Please enter a valid zipcode (Length of 5)" }).regex(/^\d+$/, { message: 'Must be a valid zipcode (Numbers 0-9)' }),
});

export const submitSignupSchema = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    address: z.object({
        line_1: z.string(),
        line_2: z.string(),
        city: z.string(),
        state: z.string(),
        zipcode: z.string().min(5, { message: "Please enter a valid zipcode (Length of 5)" }).regex(/^\d+$/, { message: 'Must be a valid zipcode (Numbers 0-9)' }),
    })
});