"use client"

import React, { useState } from "react";
import { TimerCircle } from "./timer-circle";

export default function Timer() {
  const [time, setTime] = useState(0);


  return (
    <div className="flex mt-24">
      <TimerCircle percentage={40}>
        TEST
      </TimerCircle>
    </div>
  );
}
