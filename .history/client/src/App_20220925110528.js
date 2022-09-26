import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { Fragment } from 'react';
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (toggle) => {
    setIsAuthenticated(toggle)
  }

  function isAuth

  useEffect(() => {
    isAuth()
  })

  return (
    <>
      <Switch>
        <Route exact path={'/login'} render={props => !isAuthenticated ? (<Login {...props} setAuth={setAuth} />) : (<Redirect to={'/dashboard'} />)}></Route>
        <Route exact path={'/register'} render={props => !isAuthenticated ? (<Register {...props} setAuth={setAuth} />) : (<Redirect to={'/dashboard'} />)}></Route>
        <Route exact path={'/dashboard'} render={props => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} />) : (<Redirect to={'/login'} />)}></Route>
        {/* <Route exact path="/dashboard" render={props => <Dashboard {...props} /> }></Route> */}
      </Switch>
    </>
  );
}

export default App;
