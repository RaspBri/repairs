'use server';

import { z } from "zod";
import { db } from "@/db/db";

interface FormState {
    error: {
        zipcode?: string[];
        _forms?: string[];
    }
}

const zipcodeSchema = z.object({
    zipcode: z.string().length(5, { message: "Length must be 5" }).regex(/^\d+$/, { message: "Must be ONLY numbers" })
});

// try/catch
// We do have to write a check for failed db query

export async function verifyZipcode(
    formState: FormState, 
    formData: FormData
) {

    const response = zipcodeSchema.safeParse({
        zipcode: formData.get('zipcode')
    });

    if (!response.success) {
        return {
            error: response.error.flatten().fieldErrors
        }
    }

    try {

        // Compare zipcode against previously entered zipcodes
        const zip = formData.get('zipcode') as string;
        const zipcode = await db.zipcode.findUnique({
            where: { zipcode: zip }
        });

        if (zipcode) {
            // Increment the zipcode's count by 1
            await db.zipcode.update({
                where: { zipcode: zip },
                data: {
                    zipcode: formData.get('zipcode') as string,
                    count: zipcode.count + 1
                }
            });
        } else {
            // Create the zipcode and set it to 1
            await db.zipcode.create({
                data: {
                    zipcode: formData.get('zipcode') as string,
                    count: 1
                }
            });
        }

        // Compare zipcode against servicable zipcodes

            // If it is servicable

                // redirect to servicable form

            // else

                // redirect to unservicable form

        // revalidate admin map if zipcode count % 10

    } catch (err: unknown) {

    }   
    
    return {
        error: {}
    }
}