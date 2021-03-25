import React from "react";
import "./LogContainer.css";

export default function KeypadContainer({ activityLog }) {
  return (
    <div className="gridArea LogContainer">
      {
        <ul>
          {activityLog
            .slice(0)
            .reverse()
            .map((log, idx) => (
              <li className="Log" key={log._id}>
                {log.date} - {log.log}
              </li>
            ))}
        </ul>
      }
    </div>
  );
}
