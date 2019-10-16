import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Friends from './components/Friend';
import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/friends">Friends</Link>
        </li>   
      </ul>
      <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route component={Login} />
        </Switch>     
    </div>
    </Router>
  );
}

export default App;
