import React, { Component } from 'react';
import '../Hackathon.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import ViewDetails from './ViewDetails.js';
import browserHistory from '../../history.js';



class EventTile extends Component {
  render() {
    return (
        <div>
      <div className="Event">
        <header className = "MenuHeader">
        
        <h2>Event 1</h2>
      </header>
      
      <Link to="/ViewDetails">
    <button className="button"> View </button>
    </Link>
    <span> </span>
    <button className="button"> Admin View </button> 
      
      
      
      </div>
      </div>
    );
  }
}

export default EventTile;
