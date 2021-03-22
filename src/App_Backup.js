import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [data, setData] = useState();
  const [activityLog, setActivityLog] = useState([]);
  const [keypadEntry, setKeypadEntry] = useState("");
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

  const handleKeypadEntry = (e) => {
    setKeypadEntry(e.target.value);
  };

  const submitKeypadEntry = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/keypad", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ enteredCode: keypadEntry }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        setData(JSONresponse);
      });
  };
  const triggerSensor = async (e, state = "Triggered") =>
    fetch("http://localhost:5000/update", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.id,
        type: e.target.dataset.type,
        currentState: state,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        setData(JSONresponse);
      });

  return (
    <div className="App">
      <div>
        SECURITY SYSTEM
        <div>
          {data &&
            data.sensors.map((sensor) => (
              <div key={sensor.status.id}>
                <div
                  data-type={sensor.status.type}
                  className="Sensor"
                  id={sensor.status.name}
                  onMouseOver={(e) => triggerSensor(e, "On")}
                  onMouseLeave={(e) => triggerSensor(e, "Off")}
                >
                  {sensor.status.name}
                  <br></br>
                  {sensor.status.currentStatus}
                </div>
              </div>
            ))}
        </div>
      </div>
      {data &&
        data.alarms.map((alarm) => (
          <div key={alarm.status.id}>
            <div
              data-type={alarm.status.type}
              className="Alarm"
              id={alarm.status.name}
            >
              {alarm.status.name}
              <br></br>
              {alarm.status.currentStatus}
            </div>
          </div>
        ))}
      {data &&
        data.cameras.map((camera) => (
          <div key={camera.status.id}>
            <div
              data-type={camera.status.type}
              className="Camera"
              id={camera.status.name}
            >
              {camera.status.name}
              <br></br>
              {camera.status.currentStatus}
              <br></br>
              {camera.status.lastRecording}
            </div>
          </div>
        ))}
      <div>
        {data &&
          data.doorSensors.map((doorSensor) => (
            <div key={doorSensor.status.id}>
              <div
                data-type={doorSensor.status.type}
                className="DoorSensor"
                id={doorSensor.status.name}
                onClick={(e) => triggerSensor(e)}
              >
                {doorSensor.status.name}
                <br></br>
                {doorSensor.status.currentStatus}
              </div>
            </div>
          ))}
      </div>
      <div>
        {data &&
          data.keypads.map((keypad) => (
            <div key={keypad.status.id}>
              <div
                data-type={keypad.status.type}
                className="Keypad"
                id={keypad.status.name}
              >
                {keypad.status.name}
                <form onSubmit={submitKeypadEntry}>
                  <label>
                    Enter code to reset alarm:
                    <input
                      onChange={handleKeypadEntry}
                      type="text"
                      name="name"
                      value={keypadEntry}
                    />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          ))}
      </div>
      {data && (
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
      )}
      <img alt="Clock" src={require("../src/SecurityFloorPlan.svg")} />
    </div>
  );
}
