import React from "react";
import { InitialConfig } from "../data";
import { App } from "../containers/App";
import { shallow, render, mount } from "enzyme";
import { responseRUB } from "../__tests__/__mocks__/rates";
import { getCurrency } from "../services/Currency";

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(responseRUB),
  })
);

describe("Integration tests cases", () => {
  beforeEach(() => {
    const getCurrency = jest.fn().mockImplementation(()=>Promise.resolve(responseRUB))
  });
  it("fetch data from API is ok", async () => {
    expect(await getCurrency("RUB")).toEqual(responseRUB);
  });
  const appComponent = mount(<App initial={InitialConfig} />);
  it("render App with initial data is ok", () => {
    expect(appComponent.render()).toMatchSnapshot();
  });
});
