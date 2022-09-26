import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/register" render={props => <Register {...props} />}></Route>
          <Route path="/login" render={props => <Login {...props} />}></Route>
          <Route path="/dashboard" render={props => <Dashboard {...props} />}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
