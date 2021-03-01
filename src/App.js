import React, { useState } from "react";

export default function App() {
  const [data, setdata] = useState([]);
  const postData = async (e) =>
    fetch("http://localhost:5000/update", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.id,
        currentStatus: "Triggered",
        s: "On",
      }),
      // body: JSON.stringify({
      //   name: e.target.id,
      //   type: "camera",
      //   currentStatus: "Online",
      //   range: 12,
      //   sensitivity: 33,
      // }),
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  const postData2 = async (e) =>
    fetch("http://localhost:5000/update", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.id,
        currentStatus: "Triggered",
        s: "Off",
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
        {" "}
        SENSORS
        <div>
          <button id="Sensor1" onClick={(e) => postData(e)}>
            Sensor1
          </button>
        </div>
        <div>
          <button id="Sensor2" onClick={(e) => postData(e)}>
            Sensor2
          </button>
        </div>
        <div>
          <button id="Sensor3" onClick={(e) => postData(e)}>
            Sensor3
          </button>
        </div>
      </div>
      <div>
        {" "}
        Cameras
        <div>
          <button id="Camera1" onClick={(e) => postData(e)}>
            Camera1
          </button>
        </div>
        <div>
          <button id="Camera2" onClick={(e) => postData(e)}>
            Camera2
          </button>
        </div>
        <div>
          <button
            id="Camera3"
            onMouseEnter={(e) => postData(e)}
            onMouseLeave={(e) => postData2(e)}
          >
            Camera3
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
