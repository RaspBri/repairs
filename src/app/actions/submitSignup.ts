'use server';

import { submitSignupSchema } from "../util/procesZipcodeSchema";

export type SubmitSignupFormState = {
    errors: {
      email?: string[],
      firstName?: string[],
      lastName?: string[],
      phone?: string[],
      address?: {
        line_1?: string[],
        line_2?: string[],
        city?: string[],
        state?: string[],
        zipcode?: string[]
      }
      _form?: string[];
    };
  };

export async function submitSignup(formState: SubmitSignupFormState, formData: FormData) {
    const result = submitSignupSchema.safeParse({
        email: formData.get("email"),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        phone: formData.get("phone"),
        address: {
            line_1: formData.get("line_1"),
            line_2: formData.get("line_2"),
            city: formData.get("city"),
            state: formData.get("state"),
            zipcode: formData.get("zipcode")
        }
    })

    console.log("SIGN UP SUBMITTED!");
    return {
        errors: {}
    }
}