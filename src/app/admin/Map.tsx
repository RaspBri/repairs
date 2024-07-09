import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import shapefile from 'shapefile';
import { FeatureCollection, Feature } from 'geojson';

export default function Map(): React.ReactNode {
    const [map, setMap] = useState<L.Map | null>(null);
    const [displayedZipcodes, setDisplayedZipcodes] = useState<string[] | []>([]);

    useEffect(() => {
        const initializeMap = () => {
            const mapInstance = L.map('map', {
                center: [41.77, -72.68],
                zoom: 12,
                dragging: false,
                boxZoom: false,
                layers: []
            });

            setMap(mapInstance);

            // function to load shapefiles
            async function loadShapeFile(url: string) {
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
        }

        loadShapeFile('/pathToShapeFile')
            .then(geoJson => {
                L.geoJSON(geoJson, {
                    style: feature => {
                        const value = getValueForZipcode(feature.properties.ZIPCODE);
                        return { color: getColorForValue(value); }
                    }
                })
            });

        initializeMap();
    }, [map]);

    function getValueForZipcode(zipcode: string) {
        // replace with logic to fetch value from db
        return someDatabase[zipcode] || 0;
    }

    function getColorForValue(value) {
        const maxColorValue = 255;
        const shade = Math.min(value * 2.55, maxColorValue);
        return `rgba(0, ${shade}, 0, 1)`
    }

    const someDatabase = {
        // mock data for zipcode
        "12345": 20,
        "67890": 50,
        "11223": 80
    };

    return <div id="map" style={{ width: '100%', height: '600px' }}></div>
}