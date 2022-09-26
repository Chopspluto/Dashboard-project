import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Fragment } from 'react';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
    <div className="container">
      <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/dashboard" render={props => <Dashboard {...props} />}></Route> */}
      </Routes>
      </div>
    </>
  );
}

export default App;
