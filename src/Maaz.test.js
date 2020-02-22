import { mount } from "enzyme";
import Maaz from "./Maaz";
import React from "react";

it("snapshot testing", () => {
  const tree = mount(<Maaz />);
  expect(tree).toMatchSnapshot();
});
