import React, { Component } from 'react';
import './App.css';
// import Post from "./Post";
import Homepage from "./Homepage";

class App extends Component {

  componentDidMount(){
      console.log("init!");
  };

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Palanquin:100,200,300,400,500,600,700" rel="stylesheet"/>
        {/* <header className="App-header">
            <a href="#" className="App-title">TaylorMaker</a>
        </header> */}
        {/* <Post /> */}
        <Homepage/>  
      </div>

    );
  }
}

export default App;
