import React, { useState } from "react";
import "./KeypadContainer.css";
export default function KeypadContainer({ data, setData, setPasscodeMessage }) {
  const [passcode, setPasscode] = useState({
    increment: 0,
    currentPasscode: ["X", "X", "X", "X"],
  });
  const [activeDigit, setActiveDigit] = useState(null);
  const submitPasscode = async () => {
    fetch("http://localhost:5000/keypad", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passcode,
      }),
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        setData(JSONresponse);
        setPasscodeMessage("");
      });
  };

  const handlePasscodeInput = (e) => {
    const newPasscode = passcode.currentPasscode.map((num, idx) => {
      return idx === passcode.increment ? e.target.dataset.number : num;
    });
    setActiveDigit(activeDigit === 3 ? 0 : passcode.increment + 1);
    const newIncrement = passcode.increment === 3 ? 0 : passcode.increment + 1;
    setPasscode({
      increment: newIncrement,
      currentPasscode: newPasscode,
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
          <div
            className={activeDigit === 0 ? "Active KeypadInput" : "KeypadInput"}
          >
            {passcode.currentPasscode[0]}
          </div>
          <div
            className={activeDigit === 1 ? "Active KeypadInput" : "KeypadInput"}
          >
            {passcode.currentPasscode[1]}
          </div>
          <div
            className={activeDigit === 2 ? "Active KeypadInput" : "KeypadInput"}
          >
            {passcode.currentPasscode[2]}
          </div>
          <div
            className={activeDigit === 3 ? "Active KeypadInput" : "KeypadInput"}
          >
            {passcode.currentPasscode[3]}
          </div>
        </div>
        <div className="KeypadNumbers">
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="1"
          >
            1
          </button>
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="2"
          >
            2
          </button>
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="3"
          >
            3
          </button>
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="4"
          >
            4
          </button>{" "}
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="5"
          >
            5
          </button>{" "}
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="6"
          >
            6
          </button>{" "}
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="7"
          >
            7
          </button>{" "}
          <button
            onClick={(e) => {
              handlePasscodeInput(e);
            }}
            className="KeypadNumber"
            data-number="8"
          >
            8
          </button>{" "}
          <button onClick={(e) => submitPasscode()} className="KeypadNumber OK">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
