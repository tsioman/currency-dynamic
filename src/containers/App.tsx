import React from "react";
import { Graph } from "../components/Graph";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { DataSet } from "../data";
import { GraphDataType } from "../types/";

interface IAppProps {
  data: GraphDataType;
}

interface IAppState {
  color: string;
  graph: GraphDataType;
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      color: "red",
      graph: DataSet,
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick(color: string) {
    this.setState({
      color: color,
    });
  }
  onChange() {}
  render() {
    return (
      <div>
        <svg width={300} height={300}>
          <Graph
            offset={{ x: 0, y: 0 }}
            multiplier={10}
            data={this.state.graph}
            color={this.state.color}
          />
        </svg>
        <div className="controls">
          <Button onClick={() => this.onClick("red")} textButton="red" />
          <Button onClick={() => this.onClick("green")} textButton="green" />
          <Button onClick={() => this.onClick("blue")} textButton="blue" />
          <Button onClick={() => this.onClick("yellow")} textButton="yellow" />
        </div>
        <div>
          {DataSet.map((lines) => (
            <Input value={lines} onChnage={() => this.onChange()} />
          ))}
        </div>
      </div>
    );
  }
}
