import React, { useState, useEffect } from "react";
import "./style.css";
import SecuritySystem from "./Components/SecuritySystem";

export default function App() {
  const [data, setData] = useState();
  const [activityLog, setActivityLog] = useState([]);
  const [passcodeMessage, setpasscodeMessage] = useState("");
  const fetchData = (endPoint, callback) => {
    fetch(`http://localhost:${endPoint}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        callback(JSONresponse);
      });
  };

  useEffect(() => {
    fetchData("5000/", setData);
  }, []);

  useEffect(() => {
    fetchData("5000/log", setActivityLog);
  }, [data]);

  return (
    <div className="App">
      <SecuritySystem
        activityLog={activityLog}
        data={data}
        setData={setData}
        passcodeMessage={passcodeMessage}
        setpasscodeMessage={setpasscodeMessage}
      ></SecuritySystem>
    </div>
  );
}
