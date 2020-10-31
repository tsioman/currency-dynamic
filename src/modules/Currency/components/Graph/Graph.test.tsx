import React from "react";
import { shallow } from "enzyme";

import { Graph } from "./Graph";
import { stableGraph } from "@/data";

describe("Graph render check", () => {
  it("Graph svg render with stable data", () => {
    const wrapper = shallow(
      <Graph
        area={{ width: 300, height: 300 }}
        color="red"
        data={stableGraph}
        speed={1}
        playState={"stopped"}
        onAnimationStateChange={jest.fn()}
      />
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Graph with init param data=[[20,40]] with offset x = 0, y = 0 has coords="M 0 0 L 20 40"', () => {
    const wrapper = shallow(
      <Graph
        area={{ width: 300, height: 300 }}
        color="violet"
        data={[[20, 40]]}
        speed={1}
        playState={"stopped"}
        onAnimationStateChange={jest.fn()}
      />
    );
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<path d=\\"M 20 40 L 20 40\\" stroke=\\"violet\\" stroke-width=\\"3\\" fill=\\"none\\"></path>"`
    );
  });
  it('Graph with init param data=[[20,40],[30,40]] with offset x = 0, y = 0 has coords="M 0 0 L 20 40 L 30 40"', () => {
    const wrapper = shallow(
      <Graph
        area={{ width: 300, height: 300 }}
        color="blue"
        speed={1}
        playState={"stopped"}
        onAnimationStateChange={jest.fn()}
        data={[
          [20, 40],
          [30, 40],
        ]}
      />
    );
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<path d=\\"M 20 40 L 20 40 L 30 40\\" stroke=\\"blue\\" stroke-width=\\"3\\" fill=\\"none\\"></path>"`
    );
  });
});
