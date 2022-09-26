import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <div className="container">
          <h1></h1>
          <Route path="/register" render={props => <Register {...props} />}></Route>
          <Route path="/login" render={props => <Login {...props} />}></Route>
          <Route path="/dashboard" render={props => <Dashboard {...props} />}></Route>
        </div>
      </Routes>
    </>
  );
}

export default App;
