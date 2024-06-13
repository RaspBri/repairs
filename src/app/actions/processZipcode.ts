'use server';

import { incrementZipcode } from "./incrementZipcode";
import { isServicable } from "./isServicable";

export async function processZipcode(
    formData: FormData
) {

    // Verification

    try {

        const zip = formData.get('zipcode') as string;

        const increment = incrementZipcode(zip);

        // Compare zipcode against servicable zipcodes
        const servicable = isServicable(zip);
            
        // If it is servicable
    
            // redirect to servicable form

        // else

            // redirect to unservicable form

        // revalidate admin map if zipcode count % 100

    } catch (err: unknown) {

    } 
    
    
}