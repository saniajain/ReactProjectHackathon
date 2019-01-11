import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="RightScreen">
        <header>
            <div className ="LoginHeader">
            <h1> Login </h1>
            </div>
            </header>
            
            <div className ="form">
            <form>
                <div>
                    <div className = "col1"> 
                        Email <input type ="text"/>
                    </div>
                    <div className = "col1"> 
                        Password <input type ="text"/>
                    </div>
                    <div className = "col1"> 
                             <input type ="button" value = "Submit"/>
                    </div>
                </div>
                </form>
            </div>
            </div>
    );
  }
}

export default Login;
