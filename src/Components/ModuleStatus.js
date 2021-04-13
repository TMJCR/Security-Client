import React from "react";
import "./ModuleStatus.css";
import Module from "./Module";

export default function ModuleStatus({ data, type }) {
  return (
    <div className="ModuleContainer">
      <div className="ModuleTypeUpperText">Primary Module Type</div>
      <div className="ModuleType">{type}</div>
      <div className="ModuleTypeLowerText">...15 secs ago</div>
      {data.map((item) => {
        return (
          <Module
            key={item.status.name}
            name={item.status.name}
            status="green"
            currentStatus={
              item.status.type === "DoorSensor"
                ? item.status.position
                : item.status.currentStatus
            }
          ></Module>
        );
      })}
    </div>
  );
}
