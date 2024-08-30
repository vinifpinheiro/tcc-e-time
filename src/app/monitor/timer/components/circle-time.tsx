"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircleTimer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-60 h-60 rounded-md flex items-center justify-center relative">
      <CircularProgressbar
        value={90}
        maxValue={100}
        minValue={0}
        styles={buildStyles({
          pathColor: "url(#gradient)", // Applying gradient similar to the image
          trailColor: "hsl(215,27.9%,16.9%)", // Dark background for the trail
          strokeLinecap: "round", // Rounded progress edges
        })}
      />
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="hsl(263.4, 70%, 65.4%)" />{" "}
            <stop offset="100%" stopColor="hsl(263.4, 70%, 40.4%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute">{children}</div>
    </div>
  );
};
