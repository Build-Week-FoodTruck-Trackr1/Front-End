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
 
    </>
    // <Router>
    //   <LoginForm/>
    //   <Switch>
    //     <PrivateRoute exact path='/diner/dashboard' component={user} />
    //     <PrivateRoute exact path='/operator/dashboard' component={FoodTruckList} />
    //     <Route exact path='/login' component={Login} />
    //     <Route exact path='/login/operator' component={Login} />
    //     <Route component={Login} />
    //   </Switch>
    // </Router>
  );
}

export default App;
