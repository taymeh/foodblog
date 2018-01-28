import React, { Component } from 'react';
import './Ingredient.css';

class Ingredient extends Component {
    
      componentDidMount(){
          console.log("init!");
      };
    
      render() {
        return (
          <div className="ingredient-set">
            <div className="ingredient-set-subhead">For the recipe part{this.props.subhead}</div>
            <div className="ingredient-line-item">
                <div className="ingredient-amount">1/2 cup {this.props.amount}</div><div className="ingredient-item">This is the ingredient {this.props.item}</div>
            </div>
          </div>
        );
      }
    }
    
    export default Ingredient;