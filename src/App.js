import * as React from 'react';
import { Container, Image } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import img1 from "../src/assets/icons/corona192.png";
import './App.css';

export default function App() {
  return (
    <Router>
      <Container>
        <div>
          <nav>
            <ul className='nav_bar'>
              <li className='img_1'>
                <Image src={img1} style={{width: 'auto', height: '58px'}}/>
              </li>
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
  return (
    <div style={{height: '500px'}}>
      <h1>
        Personal local coronavirus SARS-COV-2 tracker
      </h1>
      
      <h3>
        In the storm of a daily coming statistics it's easy to miss the ones, that are actually important. When you can't find useful source, you need to create it on your own!
      </h3>
      
      <div>
        You may know this data presentation (please be patient, while it loads a worldwide big amount of data):
        
        <div className="embed-container">
          <iframe src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"></iframe>
        </div>
        
        There are many other ways of presenting data, some less informative, some more:

        <div className='datawrapper_container'>
          <table>
            <th>
              New reported cases, deaths and recoveries yesterday
            </th>
          </table>
          <iframe src="https://datawrapper.dwcdn.net/JNx3A/3/"></iframe>
        </div>
      </div>
    </div>
  );
};

function About() {
  return <h2>About</h2>;
};

function Maps() {
  return <h2>Local maps</h2>;
};