import React from "react";
import "./ModuleStatusContainer.css";
import ModuleStatus from "./ModuleStatus";

export default function KeypadContainer({ data }) {
  return (
    <div className="gridArea ModuleStatusContainer">
      <div className="ModuleStatus">
        <div className="ModuleStatusTitle">SECURITY MODULES STATUS</div>
        <div className="ModuleStatusLoader">O/I.MODULE.STATUS</div>
      </div>
      {data && (
        <div>
          <ModuleStatus data={data.cameras} type="Cameras"></ModuleStatus>
          <ModuleStatus data={data.sensors} type="Sensors"></ModuleStatus>
          <ModuleStatus
            data={data.doorSensors}
            type="DoorSensors"
          ></ModuleStatus>

          <ModuleStatus data={data.alarms} type="Alarms"></ModuleStatus>
          <ModuleStatus data={data.keypads} type="Keypads"></ModuleStatus>
        </div>
      )}
    </div>
  );
}
