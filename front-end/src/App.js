import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import FoodTruckForm from './components/Operator/FoodTruckForm';
import OperatorDashboard from './components/Operator/OperatorDashboard'
import FoodTruckList from './components/Operator/FoodTruckList'
import LoginForm from './login/LoginForm'
import SignupForm from './login/SignupForm'
import Header from './components/Header'
import SignupPage from './login/SignupPage'
import LoginPage from './login/LoginPage'

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <PrivateRoute exact path='/diner/dashboard' component={FoodTruckForm} />
        <PrivateRoute exact path='/operator/dashboard' component={FoodTruckForm} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={SignupPage} />
        <Route component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
