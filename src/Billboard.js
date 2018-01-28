import React, { Component } from 'react';
import './Billboard.css';
import background from './pattern.png';


class Billboard extends Component {

  render() {
    return (
      <div className="Billboard" style={{backgroundImage: "url(" + background + ")"}}>
        <div className="container">
            <div className="title-background">
                <h1 className="title-text">Welcome to TaylorMaker!</h1>
                <h3 className="title-subtext">I'm glad you're here. What would you like to make today?</h3>

            </div>
        </div>
      </div>
    );
  }
}

export default Billboard;