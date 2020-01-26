import React from "react";
//import ReactDOM from "react-dom";

import { shallow } from "enzyme";
import Counter from "./counter";

it("renders without crashing", () => {
  // const div = document.createElement("div");
  const wrapper = shallow(<Counter></Counter>);
  //console.log(wrapper.debug());
  console.log(wrapper.state());
  // ReactDOM.render(<App />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
