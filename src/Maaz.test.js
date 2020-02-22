import { mount } from "enzyme";
import Maaz from "./Maaz";
import React, { Component } from "react";

it("snapshot testing", () => {
  const tree = mount(<Maaz />);
  console.log(tree.debug());
  expect(tree.debug()).toMatchSnapshot();
});
