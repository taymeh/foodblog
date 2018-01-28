import React, { Component } from 'react';
import './RecipeMetrics.css';



class RecipeMetrics extends Component {

  componentDidMount(){
      console.log("init!");
  };

  render() {
    return (
      <div className="recipe">
        {/* <div className="recipe-content"> */}
            <div className="recipe-header">
                <h1 className="recipe-title">{this.props.title}</h1>
                <div className="recipe-metrics">
                    <div className="recipe-metrics--metric">Servings: {this.props.servings}</div>
                    <div className="recipe-metrics--metric">Prep time: {this.props.prep}</div>
                    <div className="recipe-metrics--metric">Cook time: {this.props.cook}</div>
                    <div className="recipe-metrics--metric">Skill: {this.props.skill}</div>
                </div>
            </div>
        </div>
    //   </div>
    );
  }
}

export default RecipeMetrics;