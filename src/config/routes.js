import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";

import { Home, Assessment } from "../views";

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/self-assessment" name="Self Assessment" component={Assessment} />
        <Route path="/" component={Home} name="Website" />
      </Switch>
    </Router>
  );
};

export default MainRoute;
