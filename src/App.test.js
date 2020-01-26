import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const wrapper = shallow(<App></App>);
});

it("snapshot tetsing", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
