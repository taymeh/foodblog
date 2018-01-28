import React, { Component } from 'react';
import './Post.css';
import Tip from './Tip';
import Recipe from './Recipe';
import RecipeMetrics from './RecipeMetrics';
import picture from './testImage.jpg';



class Post extends Component {

  componentDidMount(){
      console.log("init!");
  };

  render() {
    return (
      <div className="post">
        <div className="post-body">
          {/* <div className="post-date">January 14, 2018{this.props.date}</div> */}
          <RecipeMetrics title="Rooftop Lemonade"/>
          <img src={picture} className="post-picture" alt="food"/>
          <Recipe title="Rooftop Lemonade"/>
        </div>
      </div>
    );
  }
}

export default Post;