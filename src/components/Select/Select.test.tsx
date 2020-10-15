import React from "react";
import { Select } from "./Select";
import renderer from "react-test-renderer";

describe("Select", () => {
  const values: { label: string; value: string }[] = [
    { label: "0.5x", value: "0.5" },
    { label: "Test text", value: "text" },
  ];
  it("renders Select with two options", () => {
    expect(
      renderer
        .create(<Select selected="text" values={values} onChange={jest.fn()} />)
        .toJSON()
    ).toMatchSnapshot();
  });
});
