import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import history from './components/history'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import diner from "./components/User/diner"
import FoodTruckForm from './components/Operator/FoodTruckForm';
import DinerTruckMenu from './components/User/DinerTruckMenu'
import OperatorDashboard from './components/Operator/OperatorDashboard'
import FoodTruckMenu from './components/Operator/FoodTruckMenu'
import SignupPage from './components/login/SignupPage'
import LoginPage from './components/login/LoginPage'
import TestDiner from './components/User/testdiner';
import TruckList from './components/User/TruckList';

function App() {
  return (

    <>
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path='/diner/dashboard' component={diner} />
          <PrivateRoute exact path='/diner/trucks' component={TruckList} />
          <PrivateRoute exact path='/diner/trucks/:id' component={DinerTruckMenu} />
          <PrivateRoute exact path='/operator/dashboard' component={OperatorDashboard} />
          <PrivateRoute exact path='/operator/add-trucks' component={FoodTruckForm} />
          <PrivateRoute exact path='/operator/:id' component={FoodTruckMenu} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={SignupPage} />
          <Route component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
