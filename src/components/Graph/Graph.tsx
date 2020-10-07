import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { GraphDataType, ColorSetType, AreaType } from "../../types";
import { Axis } from "../Axis/Axis";
import { GraphBody } from "../GraphBody/GraphBody";

interface IGraphProps {
  data: GraphDataType;
  options: {
    area: AreaType;
    color: ColorSetType;
    multiplier?: number;
  };
  className?: string;
}

const Graphic: React.FC<IGraphProps> = ({ data, options, className }) => {
  const { multiplier = 1, color } = options;
  return (
    <SVGPath
      className={className}
      color={color}
      strokeWidth={3}
      coords={{
        offset: { x: 0, y: 0 },
        multiplier: multiplier,
        data,
      }}
    />
  );
};

export const Graph: React.FC<IGraphProps> = ({ ...props }) => {
  const { area } = props.options;
  return (
    <svg width={area.width} height={area.height}>
      <Axis x={area.width} y={area.height} />
      <GraphBody area={area} />
      <Graphic className="graphic" {...props} />
    </svg>
  );
};
