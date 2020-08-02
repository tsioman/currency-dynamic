import React from "react";

type PathType = {
  color: string;
  strokeWidth: number;
  coords: string;
};

export const SVGPath: React.FC<PathType> = ({ color, coords, strokeWidth }) => (
  <path d={coords} stroke={color} strokeWidth={strokeWidth} fill="none"></path>
);
