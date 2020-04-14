import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return <div>Hello world!</div>;
  }
}

var mountNode = document.getElementById("app");
render(<App />, mountNode);
