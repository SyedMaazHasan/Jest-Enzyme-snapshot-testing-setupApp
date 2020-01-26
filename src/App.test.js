import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const wrapper = shallow(<App></App>);
});

it("snapshot tetsing", () => {
  //it will create a json format output of our static html page
  const tree = renderer.create(<App />).toJSON();
  //it will match the abovve tree to snapshot(if exists)...
  //note if you are running for the first time then there will not be any snapshots... so it will just create it for the first time...
  expect(tree).toMatchSnapshot();
});
