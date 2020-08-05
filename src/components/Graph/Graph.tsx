import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { GraphDataType, ColorSetType } from "../../types";

interface IGraphProps {
  data: GraphDataType
  options: {
    width: number,
    height: number,
    color: ColorSetType
  }
}

export const Graph: React.FC<IGraphProps> = ({
  data,
  options
}) => (
    <svg width={options.width} height={options.height}>
      <SVGPath
        color={options.color}
        strokeWidth={2}
        coords={{ offset: { x: 0, y: 0 }, multiplier: 1, data }}
      />
    </svg>
  );
