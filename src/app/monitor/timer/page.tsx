import BreakModal from "./components/break-modal";
import StartButton from "./components/buttons/start-button";
import StopButton from "./components/buttons/stop-button";
import { CircleTimer } from "./components/circle-time";

export default function TimerPage() {
  return (
    <div className="h-full w-full flex items-center justify- mt-6 flex-col gap-8">
      <CircleTimer>TEST</CircleTimer>
      <div className="flex px-16 w-full justify-between">
        <StopButton />
        <StartButton />
      </div>
      <BreakModal />
    </div>
  );
}
