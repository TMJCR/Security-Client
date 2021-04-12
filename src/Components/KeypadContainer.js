import React from "react";
import "./KeypadContainer.css";

export default function KeypadContainer({ data, setData }) {
  const submitPasscode = async () => {
    fetch("http://localhost:5000/keypad", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "TEST",
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        console.log("res", JSONresponse);
        setData(JSONresponse);
      });
  };

  return (
    <div
      className="
  gridArea
  KeypadContainer"
    >
      <div className="Keypad">
        <div className="KeypadText">
          <div className="KeypadTextUpper">I/O FUNCTION LVL</div>
          <div className="KeypadTextMain">ENTER PASSCODE TO RESET ALARM</div>
          <div className="KeypadTextLower">
            <div>08/243</div>
            <div>BACKUP 49%</div>
          </div>
        </div>
        <div className="KeypadInputs">
          <div className="KeypadInput">X</div>
          <div className="KeypadInput">X</div>
          <div className="KeypadInput">X</div>
          <div className="KeypadInput">X</div>
        </div>
        <div className="KeypadNumbers">
          <button className="KeypadNumber">1</button>
          <button className="KeypadNumber">2</button>
          <button className="KeypadNumber">3</button>
          <button className="KeypadNumber">4</button>
          <button className="KeypadNumber">5</button>
          <button className="KeypadNumber">6</button>
          <button className="KeypadNumber">7</button>
          <button className="KeypadNumber">8</button>
          <button onClick={(e) => submitPasscode()} className="KeypadNumber OK">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
