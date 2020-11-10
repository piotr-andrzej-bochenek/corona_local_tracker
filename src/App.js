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
      <div>
        <nav className='inactive_link'>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active_link'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/about' activeClassName='active_link'>
                About us
              </NavLink>
            </li>
            <li>
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
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}