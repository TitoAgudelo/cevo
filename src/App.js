import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Nav';
import Category from './Components/Categories/Category';
import Area from './Components/Areas/Area';
import SubArea from './Components/SubAreas/SubArea';
import ChildArea from './Components/ChildAreas/ChildArea';

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
