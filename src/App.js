import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/layouts/Layout.js';

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" component={Layout} />
        </Router>
    );
  }
}

export default App;
