import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import styled from "@emotion/styled";
import { AnimationStateType, AnimationControl } from "../../types/";

interface IControlsProps {
  animationState: AnimationStateType;
  onAnimationStateChange: (buttonState: AnimationControl) => void;
}

interface IControlsState {
  buttonState: AnimationControl;
}

const ControlsView = styled.div`
  margin: 20px 0;
`;
const ControlsLabel = styled.div`
  margin 5px;
  font-size: 16px;
`;

export class AnimationControls extends React.PureComponent<
  IControlsProps,
  IControlsState
> {
  constructor(props: IControlsProps) {
    super(props);
    this.state = {
      buttonState: "stop",
    };
  }
  setAnimationState = (buttonState: AnimationControl) => {
    this.setState({
      buttonState,
    });
    const playState = (): AnimationStateType => {
      switch(buttonState) {
        case("play"):
          return "running";
        case("pause"):
          return "paused";
        default:
          return "stopped";
      }
    } 
    buttonState === "play" ? "running" : "paused";
    this.props.onAnimationStateChange(playState());
  };
  render() {
    const buttons: AnimationControl[] = ["play", "pause", "stop"];
    let buttonId = 0;
    return (
      <ControlsView>
        <ControlsLabel>Animation Control</ControlsLabel>
        {buttons.map((button) => (
          <ButtonIcon
            key={buttonId++}
            icon={button}
            isActive={this.state.buttonState === button}
            onClick={() => this.setAnimationState(button)}
          />
        ))}
      </ControlsView>
    );
  }
}
