import useTimer from "@/app/monitor/zustand";
import { Button } from "@/components/ui/button";
import { Pause } from "lucide-react";

export default function PauseButton() {
  const { togglePaused } = useTimer();
  return (
    <div className="flex flex-col gap-2">
      <Button className="rounded-full h-16 w-16" onClick={togglePaused}>
        <Pause className="text-foreground fill-foreground size-6" />
      </Button>
      <span className="text-center text-sm font-semibold text-muted-foreground">
        Pause
      </span>
    </div>
  );
}
