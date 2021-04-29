import React, { useState } from "react";
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
  cameraMessage,
}) {
  const [seconds, setSeconds] = useState(15);
  return (
    <div>
      <div className="wrapper">
        <ModuleStatusContainer data={data}></ModuleStatusContainer>
        <AccessLevelContainer
          data={data}
          setData={setData}
          passcodeMessage={passcodeMessage}
          setPasscodeMessage={setPasscodeMessage}
          seconds={seconds}
          setSeconds={setSeconds}
        ></AccessLevelContainer>
        <CameraContainer cameraMessage={cameraMessage}></CameraContainer>
        <KeypadContainer
          data={data}
          setData={setData}
          setPasscodeMessage={setPasscodeMessage}
        ></KeypadContainer>
        <MapContainer
          data={data}
          setData={setData}
          setPasscodeMessage={setPasscodeMessage}
          seconds={seconds}
          setSeconds={setSeconds}
        ></MapContainer>
        <LogContainer activityLog={activityLog}></LogContainer>
      </div>
    </div>
  );
}
