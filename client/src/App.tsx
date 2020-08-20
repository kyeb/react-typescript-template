import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

const App = () => {
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <h1>Template app</h1>
      <p>This is the message fetched from the server:</p>
      <p>{message}</p>
    </>
  );
};

var mountNode = document.getElementById("app");
render(<App />, mountNode);
