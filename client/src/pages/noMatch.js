import React from "react";
import { Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";

const NoMatch = () => (
  <Container>
    <Jumbotron>
      <h1>404 Page Not Found</h1>
      <h1>
        Sorry, no match! Try another book.
      </h1>
    </Jumbotron>
  </Container>
);

export default NoMatch;