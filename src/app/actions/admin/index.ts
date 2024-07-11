'use server';

import { db } from "@/db/db";
import shapefile from 'shapefile';
import { FeatureCollection, Feature } from 'geojson';

export default async function getZipcodeDataFromDb() {
    // const zipcodeData = await db.zipcode.findAll();

    // if (!zipcodeData) {
    //     throw new Error("Could not fetch zipcode data");
    // }

    // return zipcodeData;
}

// function to load shapefiles
export async function loadShapeFile(url: string) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const source = await shapefile.open(arrayBuffer)
    const geoJson: FeatureCollection = { type: 'FeatureCollection', features: [] }

    let result = await source.read();
    while (!result.done) {
        if (result.value) {
            geoJson.features.push(result.value as Feature);
        }
        result = await source.read();
    }

    return geoJson;
}

