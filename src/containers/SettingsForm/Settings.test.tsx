import React from "react";
import { SettingsForm } from "./SettingsForm";
import { mount } from "enzyme";

describe("Settings tests cases", () => {
  const period = {
    from: "2020-09-01",
    to: "2020-09-30",
  };
  const area = {
    width: 600,
    height: 300,
  };
  const appComponent = mount(
    <SettingsForm area={area} period={period} onSubmit={jest.fn()} />
  );
  it("Mock Settings Tests", async () => {
    expect(appComponent).toMatchInlineSnapshot(`ReactWrapper {}`);
  });
});
