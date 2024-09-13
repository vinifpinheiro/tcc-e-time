import BreakModal from "./components/break-modal";
import TimerButtons from "./components/buttons";
import { CircleTimer } from "./components/circle-timer";
import Timer from "./components/timer";

export default function TimerPage() {
  return (
    <div className="h-full w-full flex items-center justify- mt-6 flex-col gap-8 p-6  ">
      <CircleTimer>
        <Timer />
      </CircleTimer>
      <TimerButtons />
      <BreakModal />
    </div>
  );
}
