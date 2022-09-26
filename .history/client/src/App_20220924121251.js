import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/login" render={!isAuthenticated ? (<Login/>) : (<Redirect to='/dashboard' />)}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/dashboard" render={props => <Dashboard {...props} />}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
