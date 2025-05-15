/**
 * MapContent Component
 * 
 * Contains the actual map implementation using react-leaflet.
 * This component is dynamically imported by LeafletMap.
 */
'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon issue with webpack/Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const position: [number, number] = [29.5635, -95.1234]; // Houston, TX coordinates

export default function MapContent() {
    return (
        <MapContainer 
            center={position} 
            zoom={15} 
            scrollWheelZoom={false} 
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Colleen Neal Therapy<br />
                    16864 Royal Crest Drive<br />
                    Houston, TX 77058
                </Popup>
            </Marker>
        </MapContainer>
    );
} 