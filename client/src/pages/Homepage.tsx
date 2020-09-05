import * as React from "react";
import { RouteComponentProps } from "@reach/router";

// Pages used by the router need RouteComponentProps to typecheck properly
type OwnProps = {};
type Props = RouteComponentProps & OwnProps;

const Homepage = (_props: Props) => {
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
      <p>This is a message fetched from the server via API call:</p>
      <p>{message}</p>
    </>
  );
};

export default Homepage;
