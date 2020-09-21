import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import styled from "@emotion/styled";
import { AnimationStateType, AnimationControl } from "../../types/";

interface IControlsProps {
  buttonActiveState: AnimationControl;
  onAnimationStateChange: (buttonState: AnimationStateType) => void;
}

interface IControlsState {
  buttonState: AnimationControl;
}

type mapButtonStateType = Record<AnimationControl, AnimationStateType>

const buttons: AnimationControl[] = ["play", "pause", "stop"];
const mapButtonState: mapButtonStateType = {
  play: "running",
  pause: "paused",
  stop: "stopped"
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
      buttonState: this.props.buttonActiveState,
    };
  }
  setAnimationState = (buttonState: AnimationControl) => {
    this.setState({
      buttonState,
    });
    this.props.onAnimationStateChange(mapButtonState[buttonState]);
  };
  render() {
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
