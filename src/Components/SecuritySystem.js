import React from "react";
import "./SecuritySystem.css";
import AccessLevelContainer from "../Components/AccessLevelContainer";
import CameraContainer from "../Components/CameraContainer";
import MapContainer from "./MapContainer";
import KeypadContainer from "./KeypadContainer";
import LogContainer from "./LogContainer";
import ModuleStatusContainer from "./ModuleStatusContainer";

export default function SecuritySystem({
  data,
  activityLog,
  setData,
  passcodeMessage,
  setPasscodeMessage,
}) {
  return (
    <div>
      <div className="wrapper">
        <ModuleStatusContainer data={data}></ModuleStatusContainer>
        <AccessLevelContainer
          data={data}
          passcodeMessage={passcodeMessage}
          setPasscodeMessage={setPasscodeMessage}
        ></AccessLevelContainer>
        <CameraContainer></CameraContainer>
        <KeypadContainer
          data={data}
          setData={setData}
          setPasscodeMessage={setPasscodeMessage}
        ></KeypadContainer>
        <MapContainer
          data={data}
          setData={setData}
          setPasscodeMessage={setPasscodeMessage}
        ></MapContainer>
        <LogContainer activityLog={activityLog}></LogContainer>
      </div>
    </div>
  );
}
