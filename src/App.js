import React, { useState, useEffect } from "react";
import "./style.css";
import SecuritySystem from "./Components/SecuritySystem";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  const [data, setData] = useState();
  const [cameraMessage, setCameraMessage] = useState("Ready");
  const [activityLog, setActivityLog] = useState([]);
  const [passcodeMessage, setPasscodeMessage] = useState("");
  const fetchData = (endPoint, callback) => {
    fetch(`${process.env.REACT_APP_SERVER}${endPoint}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        callback(JSONresponse);
      });
  };

  useEffect(() => {
    fetchData("/", setData);
  }, []);

  useEffect(() => {
    fetchData("/log", setActivityLog);
  }, [data]);

  useEffect(() => {
    fetchData("/cameraMessage", setCameraMessage);
  }, [data]);

  return (
    <ScrollToTop>
      <div className="App">
        <SecuritySystem
          activityLog={activityLog}
          data={data}
          setData={setData}
          passcodeMessage={passcodeMessage}
          setPasscodeMessage={setPasscodeMessage}
          cameraMessage={cameraMessage}
        ></SecuritySystem>
      </div>
    </ScrollToTop>
  );
}
