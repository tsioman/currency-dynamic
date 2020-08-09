import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";

interface IGraphBody {
  area: { x: number; y: number };
  xStep?: number;
  yStep?: number;
}

export const GraphBody: React.FC<IGraphBody> = ({
  area,
  xStep = 70,
  yStep = 70,
}) => {
  let rows: JSX.Element[] = [],
    columns: JSX.Element[] = [];
  for (let i = 0; i <= area.y; i = i + yStep) {
    rows.push(
      <SVGPath
        key={i}
        color="grey"
        strokeWidth={1}
        coords={{ offset: { x: 0, y: i }, multiplier: 1, data: [[area.x, i]] }}
      />
    );
  }
  for (let i = 0; i <= area.x; i = i + xStep) {
    columns.push(
      <SVGPath
        key={i}
        color="grey"
        strokeWidth={1}
        coords={{ offset: { x: i, y: 0 }, multiplier: 1, data: [[i, area.y]] }}
      />
    );
  }
  return <>{rows}{columns}</>;
};
