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
  };
}

export const Graph: React.FC<IGraphProps> = ({ data, options }) => (
  <svg width={options.width} height={options.height}>
    <Axis x={options.width} y={options.height} />
    <GraphBody area={{x:options.width, y:options.height}} />
    <SVGPath
      color={options.color}
      strokeWidth={3}
      coords={{ offset: { x: 0, y: 0 }, multiplier: 5, data }}
    />
  </svg>
);
