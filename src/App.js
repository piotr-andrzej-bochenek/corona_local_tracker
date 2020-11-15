import * as React from 'react';
import { Container } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <Container>
        <div>
          <nav>
            <ul className='nav_bar'>
              <li className='nav_links inactive_link'>
                <NavLink exact to='/' activeClassName='active_link'>
                  Home
                </NavLink>
              </li>
              <li className='nav_links inactive_link'>
                <NavLink exact to='/about' activeClassName='active_link'>
                  About us
                </NavLink>
              </li>
              <li className='nav_links inactive_link'>
                <NavLink exact to='/maps' activeClassName='active_link'>
                  Local maps
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/maps">
              <Maps />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
};

function About() {
  return <h2>About</h2>;
};

function Maps() {
  return <h2>Local maps</h2>;
};