import React, { Component } from 'react';
import './Homepage.css';
import Billboard from "./Billboard";
import FilterBar from "./FilterBar";
// import Post from "./Post";

class Homepage extends Component {

  componentDidMount(){
      console.log("init!");
  };

  render() {
    return (
      <div className="Homepage">
        <Billboard/>
        <FilterBar/>
      </div>

    );
  }
}

export default Homepage;