import React from "react";
import { mount } from "enzyme";

import { Graph } from "../components/Graph/Graph";
import { stableGraph } from "../data";

describe("Graph render check", () => {
  it("Graph svg render with stable data", () => {
    expect(
      mount(
        <Graph
          offset={{ x: 10, y: 10 }}
          multiplier={10}
          color="red"
          data={stableGraph}
        />
      ).html()
    ).toMatchSnapshot();
  });
});
