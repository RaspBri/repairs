'use client';

import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { loadShapeFile } from '../actions/admin';
import { FeatureCollection, Feature } from 'geojson';

type SomeDatabaseType = {
    [zipcode: string]: number;
  };

  const someDatabase: SomeDatabaseType = {
    // mock data for zipcode
    "06457": 20,
    "06040": 50,
    "06067": 80
};

export default function Map(): React.ReactNode {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);
    const [displayedZipcodes, setDisplayedZipcodes] = useState<string[] | []>([]);

    useEffect(() => {
        async function initializeMap() {
            if (mapContainerRef.current && !mapRef.current) {
                mapRef.current = L.map(mapContainerRef.current, {
                    center: [41.77, -72.68],
                    zoom: 12,
                    dragging: false,
                    boxZoom: false,
                    layers: []
                });
    
                // Example: Adding a tile layer
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(mapRef.current);
            }

            loadAndAddGeoJsonLayer();
        }; 

        initializeMap();

        // Cleanup map on component unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };

    }, []);

    async function loadAndAddGeoJsonLayer() {
        try {
            const geoJson: FeatureCollection = await loadShapeFile();

            if (mapRef.current) {
                const mapInstance = mapRef.current as L.Map; // Assert that mapRef.current is not null
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
            }

        } catch (error) {
            console.error('Error adding layer: ', error);
        }
    }

    function getValueForZipcode(zipcode: string): number {
        // replace with logic to fetch value from db
        return someDatabase[zipcode] || 0;
    }

    function getColorForValue(value: number): string {
        const maxColorValue = 255;
        const shade = Math.min(value * 2.55, maxColorValue);
        return `rgba(0, ${shade}, 0, 1)`
    }

    return <div ref={mapContainerRef} id="map" style={{ width: '100%', height: '600px' }}></div>
}