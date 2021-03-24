import React from "react";
import "./SecuritySystem.css";
import AccessLevelContainer from "../Components/AccessLevelContainer";

export default function SecuritySystem() {
  return (
    <div>
      <div className="wrapper">
        <div className="gridArea ModuleStatusContainer">
          ModuleStatusContainer
        </div>
        <AccessLevelContainer></AccessLevelContainer>
        <div className="gridArea CameraContainer">CameraContainer</div>
        <div className="gridArea KeypadContainer">KeypadContainer</div>
        <div className="gridArea MapContainer">MapContainer</div>
        <div className="gridArea LogContainer">LogContainer</div>
      </div>
    </div>
  );
}
