import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import { Home, Assessment} from "../views";

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/self-assessment" component={Assessment} name="Assessment" />
        <Route path="/" component={Home} name="Home" />
      </Switch>
    </Router>
  );
};

export default MainRoute;
