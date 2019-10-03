import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Countries from './components/Countries';
import CountryById from './components/CountryById';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/countries" exact component={Countries}/>
            <Route path="/countries/:code" exact component={CountryById}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
