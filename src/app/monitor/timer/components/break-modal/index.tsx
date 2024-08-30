"use client";

import { Button } from "@/components/ui/button";
import { AlarmClockPlus, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Wheel from "../timer-wheel/wheel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TimerWheel } from "../timer-wheel/timer-wheel";
import dayjs from "dayjs";

export default function BreakModal() {
  const [startTime, setStartTime] = useState(new Date().toLocaleTimeString());
  const [endTime, setEndTime] = useState(
    new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString()
  );
  const [totalTime, setTotalTime] = useState({ hours: 2, minutes: 0 });

  useEffect(() => {
    const [startHours, startMinutes] = startTime.split(":");
    const [endHours, endMinutes] = endTime.split(":");
    let start = dayjs().hour(Number(startHours)).minute(Number(startMinutes));
    let end = dayjs().hour(Number(endHours)).minute(Number(endMinutes));

    // Check if the end time is before the start time
    if (end.isBefore(start)) {
      end = end.add(24, "hour");
    }

    const durationInMinutes = end.diff(start, "minute");
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    setTotalTime({ hours, minutes });
  }, [startTime, endTime]);

  const onHourChange = (hour: number, setValue: (value: any) => void) => {
    setValue((prevValue: string) => {
      const [, minutes] = prevValue.split(":");
      return `${String(hour).padStart(2, "0")}:${minutes}`;
    });
  };

  const onMinuteChange = (minute: number, setValue: (value: any) => void) => {
    setValue((prevValue: string) => {
      const [hours] = prevValue.split(":");
      return `${hours}:${String(minute).padStart(2, "0")}`;
    });
  };

  const dynamicTotalTime = () => {
    const { hours, minutes } = totalTime;
    return `${hours} hora${hours > 1 ? "s" : ""} 
    ${hours > 0 && minutes > 0 ? " e " : ""}
    ${minutes > 0 ? `${minutes} minuto${minutes > 1 ? "s" : ""}` : ""}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="!p-3 h-auto w-full justify-between text-left mt-auto mb-8"
        >
          <div className="flex gap-3 w-full items-center">
            <div className="w-14 h-14 bg-background flex items-center justify-center rounded-md">
              <AlarmClockPlus className="text-muted-foreground size-6" />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-foreground font-bold text-sm">Intervalo</h1>
              <p className="text-muted-foreground text-xs text-left">
                Você pode adicionar diversos intervalos
                <br /> durante o seu dia de trabalho.
              </p>
            </div>
          </div>
          <ChevronRight className="text-muted-foreground size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="ring-0 outline-none max-w-[90%] rounded-lg">
        <div className="w-full h-full flex gap-2">
          <div className="w-1/2 h-full flex flex-col gap-2 items-center">
            <h1 className="text-foreground font-bold text-">Início</h1>
            <TimerWheel
              value={startTime}
              onHourChange={(hour) => onHourChange(hour, setStartTime)}
              onMinuteChange={(minute) => onMinuteChange(minute, setStartTime)}
            />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-2 items-center">
            <h1 className="text-foreground font-bold text-">Fim</h1>
            <TimerWheel
              value={endTime}
              onHourChange={(hour) => onHourChange(hour, setEndTime)}
              onMinuteChange={(minute) => onMinuteChange(minute, setEndTime)}
            />
          </div>
        </div>

        <Button className="w-full">
          <p>
            Adcionar pausa de{" "}
            <span className="font-bold">{dynamicTotalTime()} </span>
          </p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
