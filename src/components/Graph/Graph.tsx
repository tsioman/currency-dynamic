import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { GraphDataType, ColorSetType } from "../../types";
import { Axis } from "../Axis/Axis";
import { GraphBody } from "../GraphBody/GraphBody";

interface IGraphProps {
  data: GraphDataType;
  options: {
    width: number;
    height: number;
    color: ColorSetType;
    multiplier?: number;
  };
}

export const Graph: React.FC<IGraphProps> = ({ data, options }) => {
  const { width, height, multiplier = 1, color } = options;
  return (
    <svg width={width} height={height}>
      <Axis x={width} y={height} />
      <GraphBody area={{ width: width, height: height }} />
      <SVGPath
        className="graphic"
        color={color}
        strokeWidth={3}
        coords={{
          offset: { x: 0, y: 0 },
          multiplier: multiplier,
          data,
        }}
      />
    </svg>
  );
};
