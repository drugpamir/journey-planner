import React, { useEffect } from "react";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { Coords } from "../models/Coords";

import "leaflet/dist/leaflet.css";

const MapPanel = (coordsInput: Coords) => {
  const { lat, lon } = true ? coordsInput : { lat: 55.59608, lon: 37.04405 };
  console.log(`lat = ${lat}, lon = ${lon}`);

  useEffect(() => {
    const L = require("leaflet");

    console.log("L:", L);

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("../images/marker-icon-2x.png").default,
      iconUrl: require("../images/marker-icon.png").default,
      shadowUrl: require("../images/marker-shadow.png").default,
    });
  }, []);

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapPanel;
