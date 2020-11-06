import { ISagaModule } from "redux-dynamic-modules-saga";
import { reducer } from "./reducer";
export const getSettingsModule = (): ISagaModule<typeof reducer> => ({
  id: "settings",
  reducerMap: {
    settings: reducer,
  },
});
