import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different facility types
const hospitalIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const puskesmasIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface HealthFacility {
  id: number;
  name: string;
  type: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  rating: number;
  distance: string;
  coordinates: { lat: number; lng: number };
}

interface MapComponentProps {
  facilities: HealthFacility[];
  selectedFacility?: HealthFacility | null;
}

// Component to handle map updates when facility is selected
function MapUpdater({ selectedFacility }: { selectedFacility?: HealthFacility | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedFacility) {
      map.setView([selectedFacility.coordinates.lat, selectedFacility.coordinates.lng], 15);
    }
  }, [selectedFacility, map]);

  return null;
}

export default function MapComponent({ facilities, selectedFacility }: MapComponentProps) {
  // Center of North Sulawesi (Manado area)
  const center: [number, number] = [-1.4748, 124.8421];

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ height: '400px', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <MapUpdater selectedFacility={selectedFacility} />
      
      {facilities.map((facility) => (
        <Marker
          key={facility.id}
          position={[facility.coordinates.lat, facility.coordinates.lng]}
          icon={facility.type === 'Rumah Sakit' ? hospitalIcon : puskesmasIcon}
        >
          <Popup className="custom-popup">
            <div className="p-2 min-w-[250px]">
              <h3 className="font-semibold text-gray-900 mb-2">{facility.name}</h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    facility.type === 'Rumah Sakit' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {facility.type}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{facility.city}</span>
                </div>
                <p className="text-gray-600">{facility.address}</p>
                <p className="text-gray-600">📞 {facility.phone}</p>
                <p className="text-gray-600">🕒 {facility.hours}</p>
                <div className="flex items-center space-x-1 mt-2">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-medium">{facility.rating}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{facility.distance}</span>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-medium text-gray-700 mb-1">Layanan:</p>
                  <div className="flex flex-wrap gap-1">
                    {facility.services.slice(0, 3).map((service, index) => (
                      <span key={index} className="px-1 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                        {service}
                      </span>
                    ))}
                    {facility.services.length > 3 && (
                      <span className="text-xs text-green-600 font-medium">
                        +{facility.services.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}