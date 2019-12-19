import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/diner/dashboard' component={user} />
        <PrivateRoute exact path='/operator/dashboard' component={operator} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login/operator' component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
