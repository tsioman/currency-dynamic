import React from "react";
import { mount, shallow } from "enzyme";

import { SVGPath } from "../components/SVGPath/SVGPath";

describe("SVGPath work correct", () => {
  it("SVGPath work correct with stable data", () => {
    expect(
      mount(
        <svg>
          <SVGPath coords="M 10 10 L 20 40" color="black" strokeWidth={2} />
        </svg>
      ).html()
    ).toMatchSnapshot();
  });

  it('svg path element with parameter coords="M 10 10 L 20 40" has the expected attribute d = M 10 10 L 20 40', () => {
    const wrapper = shallow(
      <SVGPath coords="M 10 10 L 20 40" color="black" strokeWidth={2} />
    );
    const path = wrapper.find("path");
    expect(path.props()).toHaveProperty("d", "M 10 10 L 20 40");
  });

  it("svg path stroke attribute has correct value", () => {
    const wrapper = shallow(
      <SVGPath coords="M 10 10 L 20 40" color="black" strokeWidth={2} />
    );
    const path = wrapper.find("path");
    expect(path.props()).toHaveProperty("stroke", "black");
  });

});
