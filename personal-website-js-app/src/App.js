import React, { Component } from "react";
import "./App.css";
import MyCard from "./components/general";
import MyParticle from './components/my-particle'

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <>
        <MyCard className="App"/>
        <MyParticle />
      </>
    );
  }
}

export default App;
