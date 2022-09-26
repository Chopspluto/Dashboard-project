import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/register" render={}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
