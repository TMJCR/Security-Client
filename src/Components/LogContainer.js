import React from "react";
import "./LogContainer.css";

export default function KeypadContainer({ activityLog }) {
  return (
    <div className="gridArea LogContainer">
      <div className="ActivityLog">
        <div className="LogTitle">
          <div className="LogTitleDate">DATE</div>
          <div className="LogTitleDate">TIME</div>
          <div className="LogTitleActivity">ACTIVITY</div>
        </div>
        {
          <ul className="ActivityLogList">
            {activityLog
              .slice(0)
              .reverse()
              .map((log, idx) => (
                <li className={`Log Log${log.type}`} key={log._id}>
                  <div>{log.date.slice(0, 10)}</div>
                  <div>{log.date.slice(11, -5)}:GMT</div>
                  <div>{log.log}</div>
                </li>
              ))}
          </ul>
        }
      </div>
    </div>
  );
}
