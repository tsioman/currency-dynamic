import React from "react";
import { mount } from "enzyme";
import { GraphBody } from "../components/GraphBody/GraphBody";

describe("GraphBody renders checks", () => {
  const graphBodyWrapper = mount(
    <svg>
      <GraphBody area={{ width: 500, height: 200 }} xStep={100} yStep={50} />
    </svg>
  );

  it("First and last horiziontal lines grid with y-step=50 for height 200 is correct", () => {
    const lines = graphBodyWrapper.find('path').find('.horizontal-lines');
    expect(lines.at(0).render().attr('d')).toBe(`M 0 0 L 500 0`)
    expect(lines.at(lines.length - 1).render().attr('d')).toBe(`M 0 200 L 500 200`)
  });

  it("First and last vertical lines grid with x-step=100 for width 500 is correct", () => {
    const lines = graphBodyWrapper.find('path').find('.vertical-lines');
    expect(lines.at(0).render().attr('d')).toBe(`M 0 0 L 0 200`)
    expect(lines.at(lines.length - 1).render().attr('d')).toBe(`M 500 0 L 500 200`)
  });

});
