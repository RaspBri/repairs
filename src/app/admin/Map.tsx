'use client';

import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { loadShapeFile } from '../actions/admin';
import { FeatureCollection, Feature } from 'geojson';

type SomeDatabaseType = {
    [zipcode: string]: number;
  };

  const someDatabase: SomeDatabaseType = {
    // mock data for zipcode
    "12345": 20,
    "67890": 50,
    "11223": 80
};

export default function Map(): React.ReactNode {
    const [map, setMap] = useState<L.Map | null>(null);
    const [displayedZipcodes, setDisplayedZipcodes] = useState<string[] | []>([]);

    useEffect(() => {
        async function initializeMap() {
            const mapInstance = L.map('map', {
                center: [41.77, -72.68],
                zoom: 12,
                dragging: false,
                boxZoom: false,
                layers: []
            });

            setMap(mapInstance);

            // Filter zipcodes based on map data

            try {
                const geoJson: FeatureCollection = await loadShapeFile('../zipcodedata/cb_2018_us_zcta510_500k.shp');
                const geoJsonLayer = L.geoJSON(geoJson, {
                    style: feature => {
                        const zipcode = feature?.properties.ZIPCODE;
                        const value = zipcode ? getValueForZipcode(zipcode) : 0;
                        return { color: getColorForValue(value) };
                    }
                }).addTo(mapInstance);
    
                const updateDisplayedZipcodes = () => {
                    const bounds = mapInstance.getBounds();
                    const zipcodes: string[] = [];
    
                    geoJsonLayer.eachLayer(layer => {
                        if (layer instanceof L.Polygon && bounds.intersects(layer.getBounds())) {
                            const properties = (layer.feature as Feature).properties;
                            if (properties && properties.ZIPCODE) {
                                zipcodes.push(properties.ZIPCODE);
                            }
                        }
                    });
    
                    setDisplayedZipcodes(zipcodes);
                };
    
                mapInstance.on('moveend', updateDisplayedZipcodes);
                mapInstance.on('zoomend', updateDisplayedZipcodes);
            } catch (error) {
                console.error('Error loading shapefile: ', error);
            }
        };

        if (!map) {
            initializeMap();
        }
    }, [map]);

    function getValueForZipcode(zipcode: string): number {
        // replace with logic to fetch value from db
        return someDatabase[zipcode] || 0;
    }

    function getColorForValue(value: number): string {
        const maxColorValue = 255;
        const shade = Math.min(value * 2.55, maxColorValue);
        return `rgba(0, ${shade}, 0, 1)`
    }

    return <div id="map" style={{ width: '100%', height: '600px' }}></div>
}