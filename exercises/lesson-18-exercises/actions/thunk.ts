import { PeopleResponse } from "../../types/";
import { http } from "../../api";
import { LOAD_START, LOAD_FAILURE, LOAD_SUCCESS } from "../types/";

const loadStarted = () => ({
  type: LOAD_START,
});

const loadSuccess = (data: PeopleResponse) => ({
  type: LOAD_SUCCESS,
  payload: {
    ...data,
  },
});

const loadFailure = (error: string) => ({
  type: LOAD_FAILURE,
  payload: {
    error,
  },
});

export const fetchPeople = () => {
  return (dispatch: Function) => {
    dispatch(loadStarted());
    return http("https://swapi.dev/api/people")
      .then((data) => dispatch(loadSuccess(data as PeopleResponse)))
      .catch((err) => dispatch(loadFailure(err)));
  };
};
