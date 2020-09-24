import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import {
  GraphDataType,
  ColorSetType,
  AreaType,
  AnimationStateType,
  AnimationSpeedType,
} from "../../types";
import { Axis } from "../Axis/Axis";
import { GraphBody } from "../GraphBody/GraphBody";
import { withAnimate } from "../../hoc/withAnimate";

interface IGraphProps {
  data: GraphDataType;
  options: {
    area: AreaType;
    color: ColorSetType;
    multiplier?: number;
  };
  speed: AnimationSpeedType;
  playState: AnimationStateType;
  className?: string;
}

const Graphic: React.FC<IGraphProps> = ({ data, options, className, playState, speed }) => {
  const { multiplier = 1, color } = options;
  const [x, y] = data[0];
  const firstGraphPoint = { x, y };
  const AnimateGraph = withAnimate(SVGPath, {playState, speed});

  return (
    <AnimateGraph
      className={className}
      color={color}
      strokeWidth={3}
      coords={{
        offset: firstGraphPoint,
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
      {props.data.length > 0 && <Graphic {...props} />}
    </svg>
  );
};
