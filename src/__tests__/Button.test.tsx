import React from "react";
import { mount } from "enzyme";
import { Button } from "../components/Button/Button";

const onClick = jest.fn();

describe("Button render check", () => {
  const buttonWrapper = mount(<Button color="red" textButton="red" onClick={onClick}></Button>);
  it("Default red button render", () => {
    expect(buttonWrapper.render()).toMatchSnapshot(
      '<button class="button" style="color: red;">red</button>');
  });
  it("Button on click event work", () => {
    buttonWrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("Active red button has class button--active", () => {
    const wrapper = mount(
      <Button
        color="red"
        textButton="red"
        onClick={onClick}
        isActive={true}
      ></Button>
    );
    expect(wrapper.find(".button").hasClass("button--active")).toBe(true);
  });

  it("Button with color parameter 'green' has color 'green' ", () => {
    const wrapper = mount(
      <Button
        color="green"
        textButton="green"
        onClick={onClick}
        isActive={true}
      ></Button>
    );
    expect(wrapper.props()).toHaveProperty("color", "green");
  });

  it("Button with textButton parameter 'violet' has text 'violet' ", () => {
    const wrapper = mount(
      <Button
        color="violet"
        textButton="violet"
        onClick={onClick}
        isActive={true}
      ></Button>
    );
    expect(wrapper.text()).toEqual("violet");
  });
});
