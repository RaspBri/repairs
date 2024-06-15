'use server';

import { Errors } from '../types/Errors'
import { redirect } from "next/navigation";
import { errorMessage } from '../util/errorMessage'
import { processZipcodeSchema } from '../util/procesZipcodeSchema'
import { incrementZipcode } from "./incrementZipcode"
import paths from '../paths'
import { isServicable } from "./isServicable"
import { isRedirectError } from "next/dist/client/components/redirect";

type ProcessZipcodeFormState = Errors

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
            return errorMessage({ _form: ["Failed to increment zipcode"] })
        }

        // revalidate admin map if zipcode count % 100

        // Compare zipcode against servicable zipcodes
        const servicable = isServicable(zip);

        // // If it is servicable
        // if (servicable) {
        //     // redirect to servicable form
        //     return errorMessage({ zipcode: ["Redirect to signup form"] })
        // }

        // // redirect to unservicable form
        // return errorMessage({ zipcode: ["Redirect to lead form"] })

        redirect(`${paths.signup()}?servicable_form=${servicable}`);
    } catch (err: unknown) {
        if (isRedirectError(err)) {
            throw err;
        } else if (err instanceof Error) {
            return errorMessage({ _form: [err.message] })
        } else {
            return errorMessage({ _form: ['Something went wrong'] })
        }
    }
}
