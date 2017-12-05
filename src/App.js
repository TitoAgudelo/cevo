import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Nav';
import Main from './Components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
