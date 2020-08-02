import React from "react";
import { shallow } from "enzyme";

import { Graph } from "../components/Graph/Graph";
import { stableGraph } from "../data";

describe("Graph render check", () => {

  it("Graph svg render with stable data", () => {
    const wrapper = shallow(<Graph
      offset={{ x: 10, y: 10 }}
      multiplier={10}
      color="red"
      data={stableGraph}
    />)
    expect(
      wrapper.html()
    ).toMatchSnapshot();
  });
  it('Graph with init param "multiplier = 10" and data=[[2,4]] with offset x = 0, y = 0 has coords="M 0 0 L 20 40"', () => {
    const wrapper = shallow(<Graph
      offset={{ x: 0, y: 0 }}
      multiplier={10}
      color="violet"
      data={[[2, 4]]}
    />)
    expect(
      wrapper.children().props()
    ).toHaveProperty("coords", "M 0 0 L 20 40")
  })
  it('Graph with init param "multiplier = 10" and data=[[2,4],[3,4]] with offset x = 0, y = 0 has coords="M 0 0 L 20 40 L 30 40"', () => {
    const wrapper = shallow(<Graph
      offset={{ x: 0, y: 0 }}
      multiplier={10}
      color="violet"
      data={[[2, 4], [3, 4]]}
    />)
    expect(
      wrapper.children().props()
    ).toHaveProperty("coords", "M 0 0 L 20 40 L 30 40")
  })

  it('Graph with init param "multiplier = 10" and data=[7,7] with offset x = 3, y = 3 has coords="M 7 7 L 17 17"', () => {
    const wrapper = shallow(<Graph
      offset={{ x: 7, y: 7 }}
      multiplier={10}
      color="violet"
      data={[[1, 1]]}
    />)
    expect(
      wrapper.children().props()
    ).toHaveProperty("coords", "M 7 7 L 17 17")
  })
  it('Graph with init param "multiplier = 33" and data=[1,1] with offset x = 0, y = 0 has coords="M 0 0 L 33 33"', () => {
    const wrapper = shallow(<Graph
      offset={{ x: 0, y: 0 }}
      multiplier={33}
      color="violet"
      data={[[1, 1]]}
    />)
    expect(
      wrapper.children().props()
    ).toHaveProperty("coords", "M 0 0 L 33 33")
  })

});
