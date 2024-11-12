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
    svgOptions: {
      color: "hsl(360deg 85% 60%)",
      radius: 0.5,
    },
  });

  //berlin pin
  map.addPin({
    lat: 52.520008,
    lng: 13.404954,
    svgOptions: {
      color: "hsl(217deg 91% 60%)",
      radius: 0.5,
    },
  });

  //sao paulo pin
  map.addPin({
    lat: -23.55052,
    lng: -46.633308,
    svgOptions: {
      color: "hsl(142deg 71% 45%)",
      radius: 0.5,
    },
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
