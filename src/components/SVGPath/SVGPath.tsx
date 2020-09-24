import React, { useCallback } from "react";
import { GraphDataType } from "../../types/";

type PathType = {
  color: string;
  strokeWidth: number;
  coords: ISVGPath;
  className?: string;
  frame?: number;
  timerId?: NodeJS.Timeout;
};

export interface ISVGPath {
  offset: { x: number; y: number };
  multiplier: number;
  data: GraphDataType;
}

const toSVGCoordinates = ({ offset, multiplier, data }: ISVGPath): string => {
  const d = [`M ${offset.x * multiplier} ${offset.y * multiplier}`];
  const collection = data.map((section): string => {
    const xSection = section[0] * multiplier;
    const ySection = section[1] * multiplier;
    return `L ${xSection} ${ySection}`;
  });
  return d.concat(collection).join(" ");
};

export const SVGPath: React.FC<PathType> = ({
  color,
  strokeWidth,
  coords,
  className,
  ...props
}) => {
  const animateCallback = (node: SVGElement) => {
    console.log (props)
    if (node && props.timerId) {
      const totalLength = Math.ceil(node.getTotalLength());
      node.style.strokeDasharray = [length++, totalLength].join(" ");
    }
    
  }
    
  const ref = useCallback(
    animateCallback,
    [props]
  );
  return (
    <path
      ref={ref}
      d={toSVGCoordinates(coords)}
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      fill="none"
    ></path>
  );
};
