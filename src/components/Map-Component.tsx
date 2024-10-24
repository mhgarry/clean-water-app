"use client";

import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const MapComponent = () => {
  const map = useMap();

  React.useEffect(() => {
    map.setView([51.505, -0.09], 13);
  }, [map]);

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MapComponent;
