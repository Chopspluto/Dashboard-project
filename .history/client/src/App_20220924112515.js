import React from "react";
import {Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Fragment>
      <Route>
          <Route path="/register" render={props => <Register {...props} />}></Route>
          <Route path="/login" render={props => <Login {...props} />}></Route>
          <Route path="/dashboard" render={props => <Dashboard {...props} />}></Route>
      </Route>
    </Fragment>
  );
}

export default App;
