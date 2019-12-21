import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import FoodTruckList from './components/Operator/FoodTruckList';
import LoginForm from './login/LoginForm';
import SignupForm from './login/SignupForm'
import  Header  from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path='/diner/dashboard' component={Header} />
        <PrivateRoute exact path='/operator/dashboard' component={Header} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/register' component={SignupForm} />
        <Route component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
