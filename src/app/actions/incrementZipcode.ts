import { db } from "@/db/db";

export async function incrementZipcode(zipcode: string) {
    const upsertUser = await db.zipcode.upsert({
        where: {
            zipcode,
        },
        update: {
            count: {
                increment: 1,
              },
        },
        create: {
          zipcode,
          count: 1,
        },
    });

    if (!upsertUser) {
        console.log("Failed to increment zipcode upserting into database")

        return false;
    }

    return true;
}