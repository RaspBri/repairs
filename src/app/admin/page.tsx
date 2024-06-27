'use client';

import { faker } from "@faker-js/faker";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
// import { accessSecret } from "../actions/getGoogleSecret";

export default async function Admin() {
    // const key = await accessSecret();

    // if (!key) {
    //     return (
    //         <div>
    //             Cannot find key
    //         </div>
    //     );
    // }

    const position = {lat: 53.54992, lng: 10.00678};

    return (
        <APIProvider apiKey={""}>
            <Map defaultCenter={position} defaultZoom={10}>
            <Marker position={position} />
            </Map>
        </APIProvider>
    );
}

/**
 * Create MAP
 */
// Import zipcode data with the coordinate boundaries

// Create the Google Map
// Center it at a static location (FOR NOW, LATER TECHNICIAN LOCATION COORDINATES)

// Create a polygon for each zipcode that is currently viewed on the map
// The amount of polygons that are filled in should somehow be based on the current operating space

/**
 * Color Map
 */
// Fill database with State/U.S. Zipcodes starting at 1
// What's out minimum?
//

class DummyUser {
    name: string;
    zipcode: string;

    constructor() {
        this.name = faker.name.firstName();
        this.zipcode = this.generateNewYorkZipCode();
    }

    generateNewYorkZipCode(): string {
        let zip = faker.address.zipCode();

        while (+zip <= 6000 || +zip >= 6999) {
            zip = faker.address.zipCode();
        }

        return zip;
    }
}

