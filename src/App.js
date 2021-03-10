import React, { useState, useEffect } from "react";
import "./style.css";
export default function App() {
  const [data, setdata] = useState();
  const [keypadEntry, setKeypadEntry] = useState("");
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
        setdata(JSONresponse);
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
        setdata(JSONresponse);
      });

  return (
    <div className="App">
      <div>
        SENSORS
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
    </div>
  );
}
