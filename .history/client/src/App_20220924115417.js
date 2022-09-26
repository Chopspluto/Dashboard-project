import React, { useState } from "react";
import { Routes, Route, Re } from "react-router-dom";
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
        <Routes>
          <Route exact path="/login" render={props => !isAuthenticated ? (<Login {...props} />) : (<)}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/dashboard" render={props => <Dashboard {...props} />}></Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
