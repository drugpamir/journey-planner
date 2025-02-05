import React, { useState } from "react";
import L, { LatLng, LeafletMouseEvent } from "leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { Coords } from "../models/Coords";
import { generateLatID } from "../utils/dataGenerator";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  //iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconRetinaUrl: require("../images/marker-icon-2x.png"),
  iconUrl: require("../images/marker-icon.png"),
  shadowUrl: require("../images/marker-shadow.png"),
});

interface MapProps {
  markers: LatLng[];
  setMarkers: React.Dispatch<React.SetStateAction<LatLng[]>>;
}

const MapComponent = ({ markers, setMarkers }: MapProps) => {
  console.log("markers:", markers);
  useMapEvents({
    click(e: LeafletMouseEvent) {
      console.log("e.latlng:", e.latlng);
      const latId = generateLatID(e.latlng.lat, e.latlng.lng);
      const newMarkers = markers.filter(
        (m) => generateLatID(m.lat, m.lng) !== latId,
      );
      newMarkers.push(e.latlng);
      setMarkers(newMarkers);
      // setMarkers([...markers, e.latlng]);
    },
  });
  return null;
};

const MapPanel = (coordsInput: Coords) => {
  const [markers, setMarkers] = useState<LatLng[]>([]);

  const { lat: latCenter, lon: longCenter } = true
    ? coordsInput
    : { lat: 55.59608, lon: 37.04405 };
  console.log(`lat = ${latCenter}, lon = ${longCenter}`);

  return (
    <MapContainer
      center={[latCenter, longCenter]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "80vh" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapComponent markers={markers} setMarkers={setMarkers}></MapComponent>

      {markers.map((marker) => (
        <Marker key={generateLatID(marker.lat, marker.lng)} position={marker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPanel;
