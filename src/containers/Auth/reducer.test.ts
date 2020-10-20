import { actions, reducer, CheckState, initialState } from "./reducer";

describe("Login reducer", () => {
  const username = "Test user";
  it("Is set failed status for wrong username length", () => {
    expect(reducer(initialState, actions.login("Min"))).toEqual({
      username: "Min",
      status: CheckState.failed,
    });
  });
  it("Is correct login action", () => {
    expect(reducer(initialState, actions.login(username))).toEqual({
      username,
      status: CheckState.succeed,
    });
  });
  it("Is logout action work correctly", () => {
    expect(
      reducer({ username, status: CheckState.succeed }, actions.logout())
    ).toEqual({
      username: "",
      status: CheckState.failed,
    });
  });
});
