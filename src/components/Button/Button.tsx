import React from "react";
import "./Button.css";
import {ColorSetType} from "../../types/";

type ButtonType = {
  color: ColorSetType;
  textButton: string;
  isActive: boolean;
  onClick: () => void;
};

export class Button extends React.Component<ButtonType> {
  constructor(props: ButtonType) {
    super(props);
  }

  render() {
    const className = this.props.isActive ? "button button--active" : "button";
    return (
      <button className={className} onClick={this.props.onClick} style={{color: `${this.props.color}`}}>
        {this.props.textButton}
      </button>
    );
  }
}
