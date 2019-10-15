import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/Friends">Friends</Link>
        </li>   
      </ul>
      <Switch>
          <PrivateRoute exact path="/Friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
  );
}

export default App;
