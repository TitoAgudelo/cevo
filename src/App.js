import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  }
}

export default App;
