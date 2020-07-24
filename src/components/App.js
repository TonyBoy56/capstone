import React from 'react';
import Signin from "./authorization/Signin";
import UserControl from "./UserControl"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Switch>
        <Route path = "/signin">
          <Signin />
        </Route>
        <Route path = "/">
          <UserControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
