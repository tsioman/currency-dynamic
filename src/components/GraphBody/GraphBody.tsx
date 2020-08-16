import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { AreaType } from "../../types";

interface IGraphBody {
  area: AreaType;
  xStep?: number;
  yStep?: number;
}

export class GraphBody extends React.Component<IGraphBody> {
  constructor(props: IGraphBody) {
    super(props);
  }
  shouldComponentUpdate(nextProps: IGraphBody) {
    return (
      this.props.area.height !== nextProps.area.height ||
      this.props.area.width !== nextProps.area.width
    );
  }
  render() {
    const { area, xStep = 70, yStep = 70 } = this.props;
    let grid: JSX.Element[] = [];
    for (let i = 0; i <= area.height; i = i + yStep) {
      grid.push(
        <SVGPath
          className="horizontal-lines"
          key={`height_${i}`}
          color="grey"
          strokeWidth={1}
          coords={{
            offset: { x: 0, y: i },
            multiplier: 1,
            data: [[area.width, i]],
          }}
        />
      );
    }
    for (let i = 0; i <= area.width; i = i + xStep) {
      grid.push(
        <SVGPath
          className="vertical-lines"
          key={`width_${i}`}
          color="grey"
          strokeWidth={1}
          coords={{
            offset: { x: i, y: 0 },
            multiplier: 1,
            data: [[i, area.height]],
          }}
        />
      );
    }
    return grid;
  }
}
