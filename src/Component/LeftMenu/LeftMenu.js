import React, { Component } from 'react';
import './LeftMenu.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Login from '../Login/Login.js';
import Hackathon from '../Hackathon/Hackathon.js';
import Event from '../Event/Event.js';
import Lab from '../Lab/Lab.js';
import Profile from '../Profile/Profile.js';
import browserHistory from '../history.js';
import ViewDetails from '../Hackathon/EventTile/ViewDetails.js';

class LeftMenu extends Component {
  render() {
    return (
      <BrowserRouter >
      <div>
      <div className ="LeftMenu">
        <header className = "MenuHeader">
        
          <h2><img src= {require("./imageReact.png")} width = "30" height = "30" alt =""/>Hackathon</h2>
        </header>
          <ul>
            <li> <Link to="/Hackathon">  Hackathons </Link>  </li>
            <li> <Link to="/Event"> Add Event </Link> </li>
            <li> <Link to="/Lab"> Labs </Link> </li>
            <li> <Link to="/Profile"> Profile </Link> </li>
          </ul>
          </div>
          <div>
          <Route exact path ="/" component ={Login}/>
          <Route path ="/Hackathon" component ={Hackathon}/>
          <Route path="/Event" component={Event}/>
          <Route path="/Lab" component={Lab}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/ViewDetails" component={ViewDetails}/>
          </div>
</div>
            
            </BrowserRouter>
    );
  }
}

export default LeftMenu;
