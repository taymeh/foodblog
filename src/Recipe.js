import React, { Component } from 'react';
import './Recipe.css';
import Ingredients from './Ingredients';
import Instructions from './Instructions';


class Recipe extends Component {

  componentDidMount(){
      console.log("init!");
  };

  render() {
    return (
      <div className="recipe">
        <div className="recipe-content">
            <div className="recipe-body">
                <div className="recipe-subhead">
                    <div className="recipe-subhead--title">Description</div>
                    <p>this is the description of the recipe{this.props.description}</p>
                </div>
                <div className="recipe-subhead">
                    <div className="recipe-subhead--title">Ingredients</div>
                    <Ingredients ingredients={this.props.ingredients}/>
                </div>
                <div className="recipe-subhead">
                    <div className="recipe-subhead--title">Instructions</div>
                    <Instructions instructions={this.props.instructions}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Recipe;