import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Keep from "./Keep";

const AppRouter = () => {
  return (
    <Router>
      <Link className="text-decoration-none px-3" to="/keep">
        Keep note
      </Link>
      <Switch>
        <Route path="/keep">
          <Keep />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
