import React, { Component } from 'react';
import Game from './comps/game';
import './App.css';

class App extends Component {

    constructor(){
      super()

      this.state = {
        sequence: []
      }
    }


    

  render() {
    return (
      <div className="App">
          <Game/>
      </div>
    );
  }
}

export default App;
