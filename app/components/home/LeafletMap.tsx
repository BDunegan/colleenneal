/**
 * Leaflet Map Component
 * 
 * Renders an interactive map using React-Leaflet.
 * Requires Leaflet's CSS to be imported globally or within this component.
 * Includes a fix for the default marker icon path issue with webpack/Next.js.
 */
'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is loaded
import L from 'leaflet';

// Fix for default marker icon issue with webpack/Next.js:
// Manually set the paths for the default marker images.
// This prevents Leaflet from trying to auto-detect paths, which often fails in module bundlers.
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Define props for the component
interface LeafletMapProps {
    position: L.LatLngExpression; // LatLngTuple | LatLngLiteral | LatLng
    address: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ position, address }) => {
    return (
        // MapContainer sets up the map instance
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            {/* TileLayer provides the base map imagery (OpenStreetMap in this case) */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Marker places a pin at the specified position */}
            <Marker position={position}>
                {/* Popup displays information when the marker is clicked */}
                <Popup>
                    {address}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafletMap; 