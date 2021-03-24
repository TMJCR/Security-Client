import React from "react";
import "./MapContainer.css";
import Map from "../Map.svg";

export default function MapContainer() {
  return (
    <div
      className="
  gridArea
  MapContainer"
    >
      <img src={Map} alt="React Logo" />
    </div>
  );
}
