import React from "react";
import "./SecuritySystem.css";
import AccessLevelContainer from "../Components/AccessLevelContainer";
import CameraContainer from "../Components/CameraContainer";
import MapContainer from "./MapContainer";
import KeypadContainer from "./KeypadContainer";
import LogContainer from "./LogContainer";

export default function SecuritySystem({ activityLog }) {
  return (
    <div>
      <div className="wrapper">
        <div className="gridArea ModuleStatusContainer">
          ModuleStatusContainer
        </div>
        <AccessLevelContainer></AccessLevelContainer>
        <CameraContainer></CameraContainer>
        <KeypadContainer></KeypadContainer>
        <MapContainer></MapContainer>
        <LogContainer activityLog={activityLog}></LogContainer>
      </div>
    </div>
  );
}
