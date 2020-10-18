import React from "react";
import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import { Select } from "@/components/Select/Select";
import { ControlsLabel, ControlsView } from "./components/Controls.styled";
import {
  AnimationStateType,
  AnimationControl,
  AnimationSpeedType,
} from "@/types/";
import { connect } from "react-redux";
import { CurrencyState } from "@/rdx/reducer";
import { animationSlice } from "@/rdx/reducer/animation";

const mapStateToProps = ({ animation }: CurrencyState) => ({
  ...animation,
});
const { setPlayingState, setSpeed } = animationSlice.actions;
const mapDispatchToProps = {
  setPlayingState,
  setSpeed,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

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

export class AnimationControlsComponent extends React.PureComponent<Props> {
  render() {
    return (
      <ControlsView>
        <ControlsLabel>Animation Control</ControlsLabel>
        {buttons.map((button: AnimationControl, index) => {
          const buttonState = mapButtonState[button];
          const isActive = this.props.playing === buttonState;
          return (
            <ButtonIcon
              key={index}
              icon={button}
              disabled={isActive}
              isActive={isActive}
              onClick={() => this.props.setPlayingState(buttonState)}
            />
          );
        })}
        <Select
          selected={this.props.speed}
          values={speedValues}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            this.props.setSpeed(Number(e.target.value) as AnimationSpeedType);
          }}
        />
      </ControlsView>
    );
  }
}

export const AnimationControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimationControlsComponent);
