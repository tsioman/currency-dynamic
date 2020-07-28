import React from "react";
import { mount } from "enzyme";

import { Button } from "../components/Button/Button";

const toggleButton = jest.fn();

describe("Button render check", () => {
  it("Default red button render", () => {
    expect(
      mount(
        <Button
          color="red"
          textButton="red"
          onClick={() => toggleButton()}
        />
      ).html()).toBe('<button class="button" style="color: red;">red</button>')
  });
  
  it("Default active red button render", () => {
    expect(
      mount(
        <Button
          color="red"
          textButton="red"
          isActive={true}
          onClick={() => toggleButton()}
        />
      ).html()).toBe('<button class="button button--active" style="color: red;">red</button>')
  });
  
  it("Button on click event work", ()=>{
    const onClick = jest.fn();
    const wrapper = mount(
        <Button
          color="red"
          textButton="red"
          onClick={onClick}
        ></Button>
      )
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  })
});
