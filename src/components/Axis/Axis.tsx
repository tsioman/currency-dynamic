import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";

interface IAxis {
  x: number;
  y: number;
}
const axisOptions = {
  color: "grey",
  strokeWidth: 2,
};
export const Axis: React.FC<IAxis> = ({ x, y }) => (
  <>
    <SVGPath
      {...axisOptions}
      coords={{ offset: { x: 0, y: 0 }, multiplier: 1, data: [[0, y]] }}
    />
    <SVGPath
      {...axisOptions}
      coords={{ offset: { x: 0, y: y }, multiplier: 1, data: [[x, y]] }}
    />
  </>
);
