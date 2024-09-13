"use client";

import { convertTime } from "@/lib/utils";
import useTimer from "../../zustand";
import clsx from "clsx";

export default function Timer() {
  const { time, isPaused, isRunning, isStopped, goal, runningExtraTime } =
    useTimer();

  const extraTime = time - goal;

  const dynamicDescription = () => {
    switch (true) {
      case isPaused:
        return (
          <p className="text-muted-foreground text-xs">O tempo está pausado</p>
        );
      case isRunning:
        return (
          <p className="text-primary text-xs">
            {runningExtraTime
              ? `Tempo Extra: ${convertTime(extraTime)}`
              : "Registrando o tempo"}
          </p>
        );
      case isStopped:
        return (
          <p
            className={clsx(
              " text-xs",
              runningExtraTime ? "text-primary" : "text-muted-foreground"
            )}
          >
            {runningExtraTime
              ? "Meta alcançada"
              : `A meta é de ${convertTime(goal)}`}
          </p>
        );
      default:
        return (
          <p
            className={clsx(
              " text-xs",
              runningExtraTime ? "text-primary" : "text-muted-foreground"
            )}
          >
            {runningExtraTime
              ? "Meta alcançada"
              : `A meta é de ${convertTime(goal)}`}
          </p>
        );
    }
  };

  return (
    <div className="relative w-[140%]">
      <h1 className="text-2xl font-semibold text-center">
        {convertTime(time)}
      </h1>
      <div className="absolute top-8 w-full text-center">
        {dynamicDescription()}
      </div>
    </div>
  );
}
