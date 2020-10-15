import { LOAD_START, LOAD_FAILURE, LOAD_SUCCESS } from "../types/";
import { PeopleResponse } from "../../types/";
import { AnyAction } from "redux";

export type State = { loading: boolean; data: PeopleResponse | null; error: string };
const initialState: State = { loading: false, data: null, error: "" };

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case LOAD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
