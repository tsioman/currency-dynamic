import { actions, reducer, CheckState, initialState } from "./reducer";
import * as faker from "faker";
describe("Login reducer", () => {
  const username = faker.name.findName();
  it("Is set failed status for wrong username length", () => {
    expect(reducer(initialState, actions.login("Min"))).toEqual({
      username: "Min",
      status: CheckState.failed,
    });
  });
  it(`Is correct login action for ${username} name`, () => {
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
