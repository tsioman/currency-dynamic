import React from "react";
import { Input } from "../components/Input/Input";
import renderer from "react-test-renderer";

describe("Input", () => {
  it("renders Input with value", () => {
    expect(
      renderer
        .create(
          <Input
            labelText="Label:"
            type="text"
            placeholder="Placeholder"
            value={"Testing"}
            onChange={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
