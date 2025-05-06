/**
 * Find Us Component (Home Page & Contact Page)
 * 
 * Displays location details (address) and an interactive map (using Leaflet).
 * Includes a link to get directions via Google Maps.
 * Dynamically imports the LeafletMap component to avoid SSR issues.
 */
'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import dynamic from 'next/dynamic';

// Dynamically import the LeafletMap component, disable SSR
// Loading state is handled within the dynamic import options
const LeafletMap = dynamic(() => import('../../components/home/LeafletMap'), {
  ssr: false,
  loading: () => <MapPlaceholder>Loading map...</MapPlaceholder>
});

const FindUsContainer = styled.section`
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// Container for the Leaflet map
const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  min-height: 350px;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #e9e9e9;
`;

// Placeholder style used during map loading
const MapPlaceholder = styled(MapContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-style: italic;
`;

const LocationDetails = styled.div`
  h2 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .directions-link {
    display: inline-block;
    background-color: ${theme.colors.secondary};
    color: white;
    padding: 0.7rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #4cae4c;
      text-decoration: none;
    }
  }
`;

export default function FindUs() {
  // Updated static address and coordinates for the map marker
  const address = "16864 Royal Crest Dr, Houston, TX 77058";
  const position: L.LatLngExpression = [29.558098, -95.115155]; // Geocoded coords for this address :contentReference[oaicite:1]{index=1}

  // Generate Google Maps search URL
  const encodedAddress = encodeURIComponent(address);
  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <FindUsContainer>
      <MapContainer>
        {/* Render the dynamically imported Leaflet map */}
        <LeafletMap position={position} address={address} />
      </MapContainer>
      <LocationDetails>
        <h2>Visit Us</h2>
        <p>
          Our office is conveniently located at:<br/>
          <strong>{address}</strong>
        </p>
        {/* Link to Google Maps for external directions */}
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="directions-link"
        >
          Get Directions
        </a>
      </LocationDetails>
    </FindUsContainer>
  );
}
