import { clickAction } from "./people";
import { store } from "../store";

describe("test middleware with probability 0.5 and random value 0.7", () => {
  it("Init state property `show` is equal false [show=false]", () => {
    expect(store.getState().people.show).toEqual(false);
  });
  jest.spyOn(global.Math, 'random').mockImplementation(()=>0.7);
  it("When probability is more than random value then state doesn`t updated by action [show=false]", () => {
    store.dispatch(clickAction({ show: true }));
    expect(store.getState().people.show).toEqual(false);
  });
});
