'use server';

import path from 'path';
import shapefile from 'shapefile';;
import { FeatureCollection, Feature } from 'geojson';

export default async function getZipcodeDataFromDb() {
    // const zipcodeData = await db.zipcode.findAll();

    // if (!zipcodeData) {
    //     throw new Error("Could not fetch zipcode data");
    // }

    // return zipcodeData;
}

// Function to load shapefiles from the filesystem
export async function loadShapeFile(): Promise<FeatureCollection> {
    const fullPath = path.resolve('src/app/actions/admin/zipcodedata/cb_2018_us_zcta510_500k.shp');
    console.log(`Loading shapefile from: ${fullPath}`);

    const source = await shapefile.open(fullPath);
    const geoJson: FeatureCollection = { type: 'FeatureCollection', features: [] };

    let result = await source.read();

    while (!result.done) {
        if (result.value) {
            geoJson.features.push(result.value as Feature);
        }
        result = await source.read();
    }

    return geoJson;
}

