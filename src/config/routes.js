import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import { Home, Assessment} from "../views";
// import { Loading } from "../components";
// const Assessment = React.lazy(()=>import('../views/Assessment'))

const MainRoute = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/self-assessment" name="Self Assessment" component={()=>(
          <React.Suspense fallback={<Loading />}>
            <Assessment />
          </React.Suspense>
        )} /> */}
        <Route path="/self-assessment" component={Assessment} name="Assessment" />
        <Route path="/" component={Home} name="Home" />
      </Switch>
    </Router>
  );
};

export default MainRoute;
