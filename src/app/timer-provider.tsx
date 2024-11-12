"use client";

import { useEffect } from "react";
import useTimer from "./monitor/zustand";

export default function TimerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    isRunning,
    setTime,
    time,
    isPaused,
    isStopped,
    goal,
    setGoal,
    toggleRunningExtraTime,
  } = useTimer();

  useEffect(() => {
    if (goal === 0) {
      setGoal(28800);
    }

    let interval: NodeJS.Timeout;
    if (isRunning && !isPaused && !isStopped) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    //every 1 minute show a console.log
    if (time % 60 === 0 && isRunning) {
      console.log("1 minute passed");
    }

    if (isRunning && time === goal) {
      toggleRunningExtraTime();
    }

    return () => clearInterval(interval);
  }, [isRunning, time, setTime, isPaused, isStopped, goal, setGoal]);

  return children;
}
