"use client";

import useTimer from "@/app/monitor/zustand";
import { Button } from "@/components/ui/button";
import { Square } from "lucide-react";

export default function StopButton() {
  const { toggleStopped } = useTimer();

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="rounded-full h-16 w-16"
        variant={"secondary"}
        onClick={toggleStopped}
      >
        <Square className="text-foreground fill-foreground size-6" />
      </Button>
      <span className="text-center text-sm font-semibold text-muted-foreground">
        Stop
      </span>
    </div>
  );
}
