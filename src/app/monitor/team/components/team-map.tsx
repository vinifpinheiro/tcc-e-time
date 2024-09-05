"use client";

import DottedMap from "dotted-map";

export default function TeamMap() {
  // It’s safe to re-create the map at each render, because of the
  // pre-computation it’s super fast ⚡️
  const map = new DottedMap({ height: 60, grid: "vertical" });

  const svgOptions = {
    color: "hsl(263.4 70% 50.4%)",
    radius: 0.5,
  };

  map.addPin({
    lat: 40.73061,
    lng: -73.935242,
    svgOptions,
  });

  const svgMap = map.getSVG({
    radius: 0.35,
    color: "hsl(215 27.9% 16.9%)",
    shape: "circle",
    backgroundColor: "hsl(224 71.4% 4.1%)",
  });

  return (
    <div>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt=""
      />
    </div>
  );
}
