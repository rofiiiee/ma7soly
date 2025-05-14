// File: src/components/LocationPicker.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationPicker = ({ onLocationSelect }) => {
  const [position, setPosition] = useState(null);

  const MapClick = () => {
    useMapEvents({
      click: async (event) => {
        const { lat, lng } = event.latlng;
        setPosition([lat, lng]);

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=ar`
          );
          const data = await response.json();

          if (data && data.display_name) {
            onLocationSelect(data.display_name);
          } else {
            onLocationSelect(`Latitude: ${lat}, Longitude: ${lng}`);
          }
        } catch (error) {
          console.error('Geocoding error:', error);
          onLocationSelect(`Latitude: ${lat}, Longitude: ${lng}`);
        }
      },
    });

    return position ? <Marker position={position} /> : null;
  };

  return (
    <div style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        center={[30.0444, 31.2357]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClick />
      </MapContainer>
    </div>
  );
};

export default LocationPicker;