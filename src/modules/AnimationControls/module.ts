import { ISagaModule } from "redux-dynamic-modules-saga";
import { animationSlice } from "./reducer";

export const getAnimationModule = (): ISagaModule<typeof animationSlice.reducer> => ({
  id: "animation",
  reducerMap: {
    animation: animationSlice.reducer,
  },
});
