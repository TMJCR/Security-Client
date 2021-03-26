import React from "react";
import "./SecuritySystem.css";
import AccessLevelContainer from "../Components/AccessLevelContainer";
import CameraContainer from "../Components/CameraContainer";
import MapContainer from "./MapContainer";
import KeypadContainer from "./KeypadContainer";
import LogContainer from "./LogContainer";
import ModuleStatusContainer from "./ModuleStatusContainer";

export default function SecuritySystem({ data, activityLog }) {
  return (
    <div>
      <div className="wrapper">
        <ModuleStatusContainer data={data}></ModuleStatusContainer>
        <AccessLevelContainer></AccessLevelContainer>
        <CameraContainer></CameraContainer>
        <KeypadContainer></KeypadContainer>
        <MapContainer></MapContainer>
        <LogContainer activityLog={activityLog}></LogContainer>
      </div>
    </div>
  );
}
