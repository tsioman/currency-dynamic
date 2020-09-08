import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { GraphDataType, ColorSetType, AreaType } from "../../types";
import { Axis } from "../Axis/Axis";
import { GraphBody } from "../GraphBody/GraphBody";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
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

const rotate = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const AnimatedGraph = styled(Graphic)`
  stroke-dashoffset: 5500;
  stroke-dasharray: 5500;
  animation: ${rotate} 3s forwards ease-out; 
  animation-play-state: play;
`;

export const Graph: React.FC<IGraphProps> = ({ ...props }) => {
  const { area } = props.options;
  return (
    <svg width={area.width} height={area.height}>
      <Axis x={area.width} y={area.height} />
      <GraphBody area={area} />
      <AnimatedGraph {...props} />
    </svg>
  );
};
