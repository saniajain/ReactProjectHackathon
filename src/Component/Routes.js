import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login/Login.js';
import Hackathon from './Hackathon/Hackathon.js';
import Event from './Event/Event.js';
import Lab from './Lab/Lab.js';
import Profile from './Profile/Profile.js';
import history from './history.js';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
          
            <Switch>
          <Route exact path ="" component ={Login}/>
          <Route path ="/Hackathon" component ={Hackathon}/>
          <Route path="/Event" component={Event}/>
          <Route path="/Lab" component={Lab}/>
          <Route path="/Profile" component={Profile}/>
          </Switch>
            
            </BrowserRouter>
    );
  }
}

export default Routes;
