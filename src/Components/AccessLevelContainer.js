import React from "react";
import "./AccessLevelContainer.css";
import PasscodeMessage from "./PasscodeMessage";
export default function AccessLevelContainer({
  data,
  passcodeMessage,
  setPasscodeMessage,
}) {
  return (
    <div
      className="
  gridArea
  AccessLevelContainer"
    >
      <div className="Console">
        <div className="ConsoleType">
          {">"} SELECT A LEVEL OF ACCESS AND INTERACT WITH MAP TO TEST SECURITY
          SYSTEM...
        </div>
      </div>
      <div className="AccessLevelButtonContainer">
        <div className="AccessLevelButtons">
          <button className="AccessButton FullAccessButton">
            <div className="AccessButtonSubText">Access Level</div>
            <div className="AccessButtonText">Full Access</div>
          </button>
          <button className="AccessButton RestrictedAccessButton">
            <div className="AccessButtonSubText">Access Level</div>
            <div className="AccessButtonText">Restricted</div>
          </button>
          <button className="AccessButton NoAccessButton">
            <div className="AccessButtonSubText">Access Level</div>
            <div className="AccessButtonText">No Access</div>
          </button>
        </div>
        <div>
          <PasscodeMessage
            data={data}
            passcodeMessage={passcodeMessage}
            setPasscodeMessage={setPasscodeMessage}
          ></PasscodeMessage>
        </div>
      </div>
    </div>
  );
}
