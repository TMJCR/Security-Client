import React from "react";
import Timer from "./Timer";
export default function passcodeMessage({ passcodeMessage }) {
  return (
    <div>
      {passcodeMessage.length > 0 && (
        <div>
          <div>Testing Mode </div>
          <div>Enter code {passcodeMessage} to reset alarm</div>
          <div>
            Refreshing in <Timer /> seconds
          </div>
        </div>
      )}
    </div>
  );
}
