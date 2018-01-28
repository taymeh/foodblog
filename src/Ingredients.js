import React, { Component } from 'react';
import './Ingredients.css';
import Ingredient from './Ingredient'

class Ingredients extends Component {
    
      componentDidMount(){
          console.log("init!");
      };
    
      render() {
        return (
          <div className="ingredients">
            <Ingredient />
          </div>
        );
      }
    }
    
    export default Ingredients;