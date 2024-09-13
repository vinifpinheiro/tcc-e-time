import { create } from "zustand";
import { persist } from "zustand/middleware";

type TimerState = {
  time: number;
  setTime: (time: number) => void;
  isRunning: boolean;
  toggleRunning: () => void;
  goal: number;
  setGoal: (goal: number) => void;
  isPaused: boolean;
  togglePaused: () => void;
  isStopped: boolean;
  toggleStopped: () => void;
  runningExtraTime: boolean;
  toggleRunningExtraTime: () => void;
  reset: () => void;
};

const initialState = {
  time: 0,
  goal: 0,
  isRunning: false,
  isPaused: false,
  isStopped: false,
  runningExtraTime: false,
};

const useTimer = create<TimerState>()(
  persist(
    (set) => ({
      ...initialState,
      setTime: (time: number) => set({ time }),
      toggleRunning: () =>
        set((state: TimerState) => ({
          isRunning: !state.isRunning,
          isPaused: false,
          isStopped: false,
        })),
      reset: () => set({ ...initialState }),
      setGoal: (goal: number) => set({ goal }),
      togglePaused: () =>
        set((state: TimerState) => ({
          isPaused: !state.isPaused,
          isRunning: false,
          isStopped: false,
        })),
      toggleStopped: () =>
        set((state: TimerState) => ({
          isStopped: !state.isStopped,
          isRunning: false,
          isPaused: false,
        })),
      toggleRunningExtraTime: () =>
        set((state: TimerState) => ({
          runningExtraTime: !state.runningExtraTime,
        })),
    }),
    {
      name: "timer", // Key for local storage
    }
  )
);

export default useTimer;
