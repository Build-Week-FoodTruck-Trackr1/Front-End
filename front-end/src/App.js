import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import LoginForm from './login/LoginForm'
import SignupForm from './login/SignupForm'
import Header from './components/Header'
import SignupPage from './login/SignupPage'
import LoginPage from './login/LoginPage'
import diner from "./components/User/diner"
function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <PrivateRoute exact path='/diner/dashboard' component={diner} />
        <PrivateRoute exact path='/operator/dashboard' component={Header} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={SignupPage} />
        <Route component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
