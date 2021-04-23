import React from "react";
import "./CameraContainer.css";

export default function CameraContainer({ cameraMessage }) {
  return (
    <div
      className="
  gridArea
  CameraContainer"
    >
      <div className="CameraText">{cameraMessage.message}...</div>
    </div>
  );
}
