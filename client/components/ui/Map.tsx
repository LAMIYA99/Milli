"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix missing marker icons in leaflet with Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const locations = [
  {
    name: "BRAVO Azure",
    address: "Afiyəddin Cəlilov küçəsi 27a",
    hours: "Hər gün: 09:00 - 23:00",
    lat: 40.3782829,
    lng: 49.8696866
  },
  {
    name: "BRAVO 20 Bayıl",
    address: "Şahlar Allahverdiyev küçəsi 6b",
    hours: "Hər gün: 09:00 - 23:00",
    lat: 40.3536786,
    lng: 49.8338214
  },
  {
    name: "BRAVO Lökbatan",
    address: "Qobu şosesi, 28 May küçəsi",
    hours: "Hər gün: 09:00 - 23:00",
    lat: 40.3333000,
    lng: 49.7333000
  },
  {
    name: "BRAVO Babək",
    address: "Babək pr. 94",
    hours: "Hər gün: 09:00 - 23:00",
    lat: 40.3921172,
    lng: 49.9156630
  }
];

export default function Map() {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[40.365, 49.85]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="grayscale opacity-80"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]} icon={icon}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address}
              <br />
              {loc.hours}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
