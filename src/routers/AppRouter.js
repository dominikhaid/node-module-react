import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Tailwind from '../pages/tailwind';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tailwind">Tailwind</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <p>Hello World !</p>
          </Route>
          <Route path="/tailwind">
            <Tailwind />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
