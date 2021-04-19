import React from "react";
import "./AccessLevelContainer.css";
import PasscodeMessage from "./PasscodeMessage";
export default function AccessLevelContainer({ passcodeMessage }) {
  return (
    <div
      className="
  gridArea
  AccessLevelContainer"
    >
      <div className="Console">
        {">"} SELECT A LEVEL OF ACCESS AND INTERACT WITH MAP TO TEST SECURITY
        SYSTEM...
      </div>
      <div className="AccessLevelButtonContainer">
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
        <PasscodeMessage passcodeMessage={passcodeMessage}></PasscodeMessage>
      </div>
    </div>
  );
}
