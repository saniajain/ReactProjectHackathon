import React, { Component } from 'react';
import './Hackathon.css';
import EventTile from './EventTile/EventTile.js';



class Hackathon extends Component {
  render() {
    return (
      <div className="RightScreen">
      <div>
        <header className = "MenuHeader">
        
        <h2> Live Events happening</h2>
      </header>
      </div>
      <span> </span>
      <div>
        <EventTile/>
        </div>
      
      </div>
    );
  }
}

export default Hackathon;
