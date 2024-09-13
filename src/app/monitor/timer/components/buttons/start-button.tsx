"use client";

import useTimer from "@/app/monitor/zustand";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function StartButton() {
  const { toggleRunning } = useTimer();

  return (
    <div className="flex flex-col gap-2">
      <Button className="rounded-full h-16 w-16" onClick={toggleRunning}>
        <Play className="text-foreground fill-foreground size-6" />
      </Button>
      <span className="text-center text-sm font-semibold text-muted-foreground">
        Start
      </span>
    </div>
  );
}
