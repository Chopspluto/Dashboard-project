import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (toggle) => {
    setIsAuthenticated(toggle)
  }

  return (
    <>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/login" render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Redirect to='/dashboard' />)}></Route>
            <Route exact path="/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to='/login' />}></Route>
            <Route exact path="/dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to='/login' />}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;