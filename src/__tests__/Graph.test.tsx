import React from "react";
import { shallow } from "enzyme";

import { Graph } from "../components/Graph/Graph";
import { stableGraph } from "../data";

describe("Graph render check", () => {

  it("Graph svg render with stable data", () => {
    const wrapper = shallow(<Graph      
      options={{width: 300, height: 300, color: "red"}}
      data={stableGraph}
    />)
    expect(
      wrapper.html()
    ).toMatchSnapshot();
  });
  it('Graph with init param data=[[20,40]] with offset x = 0, y = 0 has coords="M 0 0 L 20 40"', () => {
    const wrapper = shallow(<Graph
      options={{width: 300, height: 300, color: "violet"}}
      data={[[20, 40]]}
    />)
    expect(
      wrapper.children().find('.graphic').render().attr("d")
    ).toBe("M 0 0 L 20 40")
  })
  it('Graph with init param data=[[2,4],[3,4]] with offset x = 0, y = 0 has coords="M 0 0 L 20 40 L 30 40"', () => {
    const wrapper = shallow(<Graph      
      options={{width: 300, height: 300, color: "blue"}}
      data={[[20, 40], [30, 40]]}
    />)
    expect(
      wrapper.children().find('.graphic').render().attr("d")
    ).toBe("M 0 0 L 20 40 L 30 40")
  })

});
