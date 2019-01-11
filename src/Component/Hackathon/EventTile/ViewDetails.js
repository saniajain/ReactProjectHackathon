import React, { Component } from 'react';
import '../Hackathon.css';



class ViewDetails extends Component {
  render() {
    return (
      <div className="Event">
        <header className = "MenuHeader">
        
        <h2>Event 1 details</h2>
      </header>
      <p> participate now! </p>
      <button className="button"> Participate </button>
      </div>
    );
  }
}

export default ViewDetails;
