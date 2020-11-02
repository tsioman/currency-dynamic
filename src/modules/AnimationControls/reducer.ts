import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimationStateType, AnimationSpeedType } from "@/types";

export type AnimationState = {
  playing: AnimationStateType;
  speed: AnimationSpeedType;
};

export type PlayingAction = PayloadAction<AnimationStateType>;
export type SpeedAction = PayloadAction<AnimationSpeedType>;

const initialState: AnimationState = {
  playing: "stopped",
  speed: 1,
};

export const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setSpeed: (state, action: SpeedAction) => ({
      ...state,
      speed: action.payload,
    }),
    setPlayingState: (state, action: PlayingAction) => ({
      ...state,
      playing: action.payload,
    }),
  },
});

export const { reducer, actions } = animationSlice;
