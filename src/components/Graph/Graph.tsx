import React from "react";
import { SVGPath } from "../SVGPath/SVGPath";
import { GraphDataType } from "../../types";

interface IGraphProps {
  offset: { x: number; y: number };
  multiplier: number;
  data: GraphDataType;
  color: string;
}

export class Graph extends React.Component<IGraphProps> {
  constructor(props: IGraphProps) {
    super(props);
  }
  prepareData(): string {
    const { offset, multiplier, data } = this.props;
    const d = [`M ${offset.x} ${offset.y}`];
    const collection = data.map((section): string => {
      const xSection = offset.x + section[0] * multiplier;
      const ySection = offset.y + section[1] * multiplier;
      return `L ${xSection} ${ySection}`;
    });
    return d.concat(collection).join(" ");
  }
  render() {
    return (
      <svg width={300} height={300}>
        <SVGPath
          coords={this.prepareData()}
          color={this.props.color}
          strokeWidth={2}
        />
      </svg>
    );
  }
}
