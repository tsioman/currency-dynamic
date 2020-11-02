import { ISagaModule } from "redux-dynamic-modules-saga";
import { reducer } from "./reducer";
import { settingsSaga } from "./saga";
export const getSettingsModule = (): ISagaModule<typeof reducer> => ({
  id: "settings",
  reducerMap: {
    settings: reducer,
  },
  sagas: [settingsSaga],
});
