import React from "react";
import "./AccessLevelContainer.css";

export default function AccessLevelContainer() {
  return (
    <div
      className="
  gridArea
  AccessLevelContainer"
    >
      <div className="Console">
        > SELECT A LEVEL OF ACCESS AND INTERACT WITH MAP TO TEST SECURITY
        SYSTEM...
      </div>
      <div className="AccessLevelButtonContainer">
        <button className="AccessButton FullAccessButton">
          <div class="AccessButtonSubText">Access Level</div>
          <div class="AccessButtonText">Full Access</div>
        </button>
        <button className="AccessButton RestrictedAccessButton">
          <div class="AccessButtonSubText">Access Level</div>
          <div class="AccessButtonText">Restricted</div>
        </button>
        <button className="AccessButton NoAccessButton">
          <div class="AccessButtonSubText">Access Level</div>
          <div class="AccessButtonText">No Access</div>
        </button>
      </div>
    </div>
  );
}
