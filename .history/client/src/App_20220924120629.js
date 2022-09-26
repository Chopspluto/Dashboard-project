import React, { useState } from "react";
import { Router, Route, Redirect } from "react-router-dom";
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
          <Route exact path="/login" render={!isAuthenticated ? (<Login />) : (<Redirect to='/dashboard'/>)}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          {/* <Route exact path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/dashboard" render={props => <Dashboard {...props} />}></Route>
        </Router>
      </div>
    </>
  );
}

export default App;
