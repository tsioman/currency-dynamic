import React from "react";
import styled from "@emotion/styled";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import {
  AnimationStateType,
  AnimationControl,
  AnimationSpeedType,
} from "../../types/";
import { Select } from "../../components/Select/Select";

interface IControlsProps {
  buttonActiveState: AnimationControl;
  speed: number;
  onAnimationStateChange: (buttonState: AnimationStateType) => void;
  onAnimationSpeedChange: (speed: AnimationSpeedType) => void;
}

interface IControlsState {
  buttonState: AnimationControl;
}

type mapButtonStateType = Record<AnimationControl, AnimationStateType>;

const buttons: AnimationControl[] = ["play", "pause", "stop"];
const mapButtonState: mapButtonStateType = {
  play: "running",
  pause: "paused",
  stop: "stopped",
};
const speedValues: AnimationSpeedType[] = [0.5, 1, 2];

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
        <Select
          selected={this.props.speed}
          values={speedValues}
          onChange={(e: HTMLSelectElement) =>
            this.props.onAnimationSpeedChange(e.currentTarget.value)
          }
        />
      </ControlsView>
    );
  }
}
