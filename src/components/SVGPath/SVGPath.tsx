import React from "react";
import { GraphDataType } from "../../types/";

type PathType = {
  color: string;
  strokeWidth: number;
  coords: ISVGPath;
};

export interface ISVGPath {
  offset: { x: number; y: number };
  multiplier: number;
  data: GraphDataType;
}

const toSVGCoordinates = ({ offset, multiplier, data }: ISVGPath): string => {
  const d = [`M ${offset.x} ${offset.y}`];
  const collection = data.map((section): string => {
    const xSection = offset.x + section[0] * multiplier;
    const ySection = offset.y + section[1] * multiplier;
    return `L ${xSection} ${ySection}`;
  });
  return d.concat(collection).join(" ");
};

export const SVGPath: React.FC<PathType> = ({ color, strokeWidth, coords}) => (
  <path d={toSVGCoordinates(coords)} stroke={color} strokeWidth={strokeWidth} fill="none"></path>
);
