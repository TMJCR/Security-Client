import React, { useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(20);
  return <div>{seconds}</div>;
}
