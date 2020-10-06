import React from "react";
import { shallow } from "enzyme";
import { Axis } from "./Axis";

describe("Axis renders checks", () => {
  const axisWrapper = shallow(
    <svg>
      <Axis x={100} y={200} />
    </svg>
  );
  it("Horizontal-axis {x} is correct", () => {
    const axis = axisWrapper.children().render()[1];
    expect(axis.attribs.d).toBe("M 0 200 L 100 200");
  });

  it("Vertical-axis {y} is correct", () => {
    const axis = axisWrapper.children().render()[0];
    expect(axis.attribs.d).toBe("M 0 0 L 0 200");
  });
});
