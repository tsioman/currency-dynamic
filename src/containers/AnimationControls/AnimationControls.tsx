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
  playState: AnimationStateType;
  speed: AnimationSpeedType;
  onAnimationStateChange: (buttonState: AnimationStateType) => void;
  onAnimationSpeedChange: (speed: AnimationSpeedType) => void;
}

interface IControlsState {
  buttonState: AnimationStateType;
}

type mapButtonStateType = Record<AnimationControl, AnimationStateType>;

const buttons: AnimationControl[] = ["play", "pause", "stop"];
const mapButtonState: mapButtonStateType = {
  play: "running",
  pause: "paused",
  stop: "stopped",
};
const speedValues: { label: string; value: AnimationSpeedType }[] = [
  { label: "0.5x", value: 0.5 },
  { label: "1x", value: 1 },
  { label: "2x", value: 2 },
];

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
      buttonState: this.props.playState,
    };
  }
  componentDidUpdate(prevProps: IControlsProps) {
    const { playState } = this.props;
    if (playState && prevProps.playState !== playState) {
      this.setState({
        buttonState: playState,
      });
    }
  }
  setAnimationState = (buttonState: AnimationStateType) => {
    this.setState({
      buttonState,
    });
    this.props.onAnimationStateChange(buttonState);
  };
  render() {
    let buttonId = 0;
    return (
      <ControlsView>
        <ControlsLabel>Animation Control</ControlsLabel>
        {buttons.map((button: AnimationControl) => {
          const buttonState = mapButtonState[button];
          const isActive = this.state.buttonState === buttonState;
          return (
            <ButtonIcon
              key={buttonId++}
              icon={button}
              disabled={isActive}
              isActive={isActive}
              onClick={() => this.setAnimationState(buttonState)}
            />
          );
        })}
        <Select
          selected={this.props.speed}
          values={speedValues}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            this.props.onAnimationSpeedChange(
              Number(e.target.value) as AnimationSpeedType
            );
          }}
        />
      </ControlsView>
    );
  }
}
