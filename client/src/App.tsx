import * as React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import "./styles.css";

import SecondPage from "./pages/SecondPage";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <header>
        <h1>Template app</h1>
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/second">Second page</Link>
        </div>
      </header>

      <Router>
        <Homepage path="/" />
        <SecondPage path="/second" />
        <NotFound default />
      </Router>
    </>
  );
};

var mountNode = document.getElementById("app");
render(<App />, mountNode);
