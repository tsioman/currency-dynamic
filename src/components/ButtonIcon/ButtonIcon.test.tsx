import React from "react";
import { ButtonIcon } from "./ButtonIcon";
import renderer from "react-test-renderer";

describe("Button", () => {
  it("Play button with non active disable state", () => {
    expect(
      renderer
        .create(
          <ButtonIcon
            key={1}
            icon={"play"}
            disabled={false}
            isActive={false}
            onClick={jest.fn()}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
