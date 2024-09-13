import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedHours = `${hours}`.padStart(2, "0");
  const formattedMinutes = `${minutes}`.padStart(2, "0");
  const formattedSeconds = `${seconds}`.padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

};

