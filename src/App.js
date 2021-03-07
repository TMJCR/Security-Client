import React, { useState, useEffect } from "react";
import "./style.css";
export default function App() {
  const [data, setdata] = useState();
  const [keypadEntry, setKeypadEntry] = useState();
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:5000/", {
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((JSONresponse) => {
          setdata(JSONresponse);
        });
    };

    fetchData();
  }, []);

  const handleKeypadEntry = () => {
    setKeypadEntry(keypadEntry);
  };

  const submitKeypadEntry = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/keypad", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ enteredCode: 1234 }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        setdata(JSONresponse);
      });
  };
  const triggerSensor = async (e, state) =>
    fetch("http://localhost:5000/update", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.id,
        currentState: state,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        setdata(JSONresponse);
      });
  return (
    <div>
      <div>
        SENSORS
        <div>
          {data &&
            data.sensors.map((sensor) => (
              <div key={sensor.status.id}>
                <div
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
            <div className="Alarm" id={alarm.status.name}>
              {alarm.status.name}
              <br></br>
              {alarm.status.currentStatus}
            </div>
          </div>
        ))}
      {console.log(data)}
      {data &&
        data.cameras.map((camera) => (
          <div key={camera.status.id}>
            <div className="Camera" id={camera.status.name}>
              {camera.status.name}
              <br></br>
              {camera.status.currentStatus}
            </div>
          </div>
        ))}
      {data &&
        data.keypads.map((keypad) => (
          <div key={keypad.status.id}>
            <div className="Keypad" id={keypad.status.name}>
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
  );
}
