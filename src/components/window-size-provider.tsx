"use client";
import {
  appWindow,
  LogicalPosition,
  LogicalSize,
  currentMonitor,
} from "@tauri-apps/api/window";
import { useEffect } from "react";

//TODO: Fix the window size and position

async function setWindowPositionAndSize() {
  const screenSize = await currentMonitor();

  if (screenSize) {
    const { size, position, scaleFactor } = screenSize;
    console.log("scaleFactor", scaleFactor);
    const windowSize = new LogicalSize(500, size.height);
    await appWindow.setSize(windowSize);

    const x = position.x + size.width / 2.495 - windowSize.width / 2.495;
    const y = position.y + size.height / 2.495 - windowSize.height / 2.495;
    const windowPosition = new LogicalPosition(x, y);
    await appWindow.setPosition(windowPosition);
  }
}

export const WindowSizeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    setWindowPositionAndSize();
  }, []);

  return <div>{children}</div>;
};
