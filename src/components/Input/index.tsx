import React from "react";
import { LineType } from "../../types"
// import "./index.css";

type InputType = {
  value: LineType;
  onChnage: () => void;
};

export class Input extends React.Component<InputType> {
  constructor(props: InputType) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>X=</span>
        <input value={this.props.value[0]} />
        <span>Y=</span>
        <input value={this.props.value[1]} />
      </div>
    );
  }
}
