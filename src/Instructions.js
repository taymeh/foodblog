import React, { Component } from 'react';
import './Instructions.css';
import Instruction from './Instruction'

class Instructions extends Component {
    
      componentDidMount(){
          console.log("init!");
      };
    
      render() {
        return (
          <div className="instructions">
            <Instruction />
          </div>
        );
      }
    }
    
    export default Instructions;