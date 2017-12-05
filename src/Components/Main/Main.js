import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home/Home';
import Category from './../Categories/Category';
import Area from './../Areas/Area';
import ChildArea from './../ChildAreas/ChildArea';
import SubArea from './../SubAreas/SubArea';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:id' component={Category}/>
            <Route path='/area/:id' component={Area}/>
            <Route path='/child-area/:id' component={ChildArea}/>
            <Route path='/sub-area/:id' component={SubArea}/>
          </Switch>
        </div>
      </main>
    )
  }
}

export default Main;