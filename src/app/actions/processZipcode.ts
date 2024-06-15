'use server';

import { z } from "zod";
import { redirect } from "next/navigation";
import { incrementZipcode } from "./incrementZipcode";
import { isServicable } from "./isServicable";
import paths from '../paths'
import { isRedirectError } from "next/dist/client/components/redirect";

const processZipcodeSchema = z.object({
    zipcode: z.string().min(5, { message: "Please enter a valid zipcode (Length of 5)" }).regex(/^\d+$/, { message: 'Must be a valid zipcode (Numbers 0-9)' }),
});

interface ProcessZipcodeFormState {
    errors: {
        zipcode?: string[];
        _form?: string[];
    }
}

export async function processZipcode(
    formState: ProcessZipcodeFormState,
    formData: FormData
): Promise<ProcessZipcodeFormState> {

    const result = processZipcodeSchema.safeParse({
        zipcode: formData.get('zipcode')
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    try {

        const zip = formData.get('zipcode') as string;

        const increment = incrementZipcode(zip);

        if (!increment) {
            return {
                errors: {
                    _form: ["Failed to increment zipcode"]
                }
            }
        }

        // revalidate admin map if zipcode count % 100

        redirect(`${paths.signup()}?servicable_form=${isServicable(zip)}`);

    } catch (err: unknown) {
        if (isRedirectError(err)) {
            throw err;
        } else if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ['Something went wrong']
                }
            }
        }
    }
}