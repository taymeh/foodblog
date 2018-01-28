import React, { Component } from 'react';
import './Instruction.css';


class Instruction extends Component {
    
      componentDidMount(){
          console.log("init!");
      };
    
      render() {
        return (
          <div className="instruction">
            <div className="instruction-step-number"> 1. {this.props.stepNum}</div>
            <div className="instruction-step-description">This is how you complete this step{this.props.stepDes}</div>
          </div>
          
        );
      }
    }
    
    export default Instruction;