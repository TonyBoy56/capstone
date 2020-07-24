import React from 'react';
import logo from './logo.svg';
import './App.css';

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
