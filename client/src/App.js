import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import NoMatch from "./pages/noMatch.js";
import Results from "./pages/results";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        //*configure a route for results component*//
        <Route exact path="/results" component={Results} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;