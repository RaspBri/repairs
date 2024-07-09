import { db } from "@/db/db";

export default async function getZipcodeDataFromDb() {
    const zipcodeData = await db.zipcode.findAll();

    if (!zipcodeData) {
        throw new Error("Could not fetch zipcode data");
    }

    return zipcodeData;
}