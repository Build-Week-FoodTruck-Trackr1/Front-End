import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import FoodTruckForm from './components/Operator/FoodTruckForm';
import OperatorDashboard from './components/Operator/OperatorDashboard'
import LoginForm from './login/LoginForm';
import  Header  from './components/Header';

function App() {
  return (
    <>

    
    <Router>
      
      <Switch>
        <PrivateRoute exact path='/diner/dashboard' component={Header} />
        <PrivateRoute exact path='/operator/dashboard' component={OperatorDashboard} />
        <Route exact path='/login' component={LoginForm} />
        
        <Route component={LoginForm} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
