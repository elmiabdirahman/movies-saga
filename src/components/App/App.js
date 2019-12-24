import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Movies from '../Movies/Movies'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Router>
          <Route path='/' exact component={Movies}/>
        </Router>
      </div>
    );
  }
}

export default App;