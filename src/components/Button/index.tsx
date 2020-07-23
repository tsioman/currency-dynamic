import React from "react";
// import "./index.css";

type ButtonType = {
  textButton: string;
  onClick: () => void;
};

export class Button extends React.Component<ButtonType> {
  constructor(props: ButtonType) {
    super(props);
  }

  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.textButton}
      </button>
    );
  }
}
