'use server';

import path from 'path';
import shapefile from 'shapefile';
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
    const geoJson: FeatureCollection = {
      type: 'FeatureCollection',
      features: []
    };
  
    try {
        const source = await shapefile.open('./zipcodedata/cb_2018_us_zcta510_500k.shp');
        
        let result;
        while (!(result = await source.read()).done) {
            geoJson.features.push(result.value as Feature);
        }
    } catch (error) {
      console.error('Error reading shapefile:', error);
      throw error;
    }
  
    return geoJson;
  }