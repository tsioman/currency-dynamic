import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { GraphDataType } from "../../types";

interface ISVGData {
  offset: { x: number; y: number };
  multiplier: number;
  data: GraphDataType;
}

interface IGraphProps extends ISVGData {
  color: string;
}

const toSVGCoordinates = ({ offset, multiplier, data }: ISVGData): string => {
  const d = [`M ${offset.x} ${offset.y}`];
  const collection = data.map((section): string => {
    const xSection = offset.x + section[0] * multiplier;
    const ySection = offset.y + section[1] * multiplier;
    return `L ${xSection} ${ySection}`;
  });
  return d.concat(collection).join(" ");
};

export const Graph: React.FC<IGraphProps> = ({
  color,
  offset,
  multiplier,
  data,
}) => (
  <svg width={300} height={300}>
    <SVGPath
      coords={toSVGCoordinates({ offset, multiplier, data })}
      color={color}
      strokeWidth={2}
    />
  </svg>
);
