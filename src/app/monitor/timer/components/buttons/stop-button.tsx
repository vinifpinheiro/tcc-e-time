import { Button } from "@/components/ui/button";
import { Square } from "lucide-react";

export default function StopButton() {
  return (
    <div className="flex flex-col gap-2">
      <Button className="rounded-full h-16 w-16" variant={"secondary"}>
        <Square className="text-foreground fill-foreground size-6" />
      </Button>
      <span className="text-center text-sm font-semibold text-muted-foreground">
        Stop
      </span>
    </div>
  );
}