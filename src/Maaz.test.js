import renderer from "react-test-renderer";
import Maaz from "./Maaz";
import React from "react";

it("snapshot testing", () => {
  const tree = renderer.create(<Maaz />).toJSON();
  expect(tree).toMatchSnapshot();
});
