"use client"

import useTimer from "@/app/monitor/zustand";
import StartButton from "./start-button";
import StopButton from "./stop-button";
import PauseButton from "./pause-button";

export default function TimerButtons() {
  const { isRunning, reset } = useTimer();
  

  return (
    <div className="flex px-16 w-full justify-between">
      <StopButton />
      {isRunning ? <PauseButton /> : <StartButton />}
        <button onClick={reset}>
          RESTE
        </button>
    </div>
  );
}
