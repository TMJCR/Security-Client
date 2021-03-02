import React, { useState } from "react";

export default function App() {
  const [data, setdata] = useState([]);
  const triggerSensor = async (e, state) =>
    fetch("http://localhost:5000/update", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.id,
        sensorTrigger: state,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  return (
    <div>
      <div>
        SENSORS
        <div>
          <button
            id="Sensor1"
            onMouseOver={(e) => triggerSensor(e, "On")}
            onMouseLeave={(e) => triggerSensor(e, "Off")}
          >
            Sensor1
          </button>
        </div>
      </div>

      <div>
        {" "}
        {data.map((item) => (
          <div>
            Item: {item.name}
            <br></br>
            Status: {item.currentStatus}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
