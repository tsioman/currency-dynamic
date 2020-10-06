import React from "react";
import { InitialConfig } from "../data";
import { App } from "../containers/App";
import { Graph } from "../components/Graph/Graph";

import { mount } from "enzyme";
import { responseRUB } from "../../__mocks__/rates";
import { getCurrency } from "../services/Currency";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(responseRUB),
  })
);

describe("Integration tests cases", () => {
  beforeEach(() => {
    const getCurrency = jest
      .fn()
      .mockImplementation(() => Promise.resolve(responseRUB));
  });
  it("fetch data from API is ok", async () => {
    expect(await getCurrency("RUB")).toEqual(responseRUB);
  });
  const appComponent = mount(<App initial={InitialConfig} />);
  it("render App with initial data is ok", () => {
    expect(appComponent.render()).toMatchSnapshot();
  });
  it("first redner and initial state test [constructor and initial state test]", () => {
    expect(appComponent.find(".button--active").text()).toBe("RUB");
    expect(appComponent.find(Graph).prop("data")).toMatchInlineSnapshot(
      `Array []`
    );
  });
  it("first redner and initial state test [componentDidMount]", () => {
    expect(appComponent.find(".button--active").text()).toBe("RUB");
    expect(appComponent.find(Graph).prop("data")).toMatchInlineSnapshot(
      `Array []`
    );
  });
  it("click on button currency change current currency [componentDidUpdate]", () => {
    expect(appComponent.find(Graph).prop("data")).toMatchInlineSnapshot(
      `Array []`
    );
    expect(
      appComponent.find("button").not(".button--active").simulate("click")
    );
    expect(appComponent.find(Graph).prop("data")).toMatchInlineSnapshot(`
      Array [
        Array [
          0,
          300,
        ],
        Array [
          300,
          0,
        ],
      ]
    `);
    expect(appComponent.find(".button--active").text()).toBe("USD");
  });
});
