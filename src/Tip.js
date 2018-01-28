import React, { Component } from 'react';
import './Tip.css';

class Tip extends Component {

  componentDidMount(){
      console.log("init!");
  };

  render() {
    return (
      <div className="tip">
        <h1 className="tip-title">Tip!</h1>
        <p>Here is some useful info...</p>
      </div>
    );
  }
}

export default Tip;