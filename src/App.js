import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/layouts/Layout.js';
import About from './components/About';
import Contact from './components/Contact';
import Topics from './components/Topics';

class App extends Component {
  render() {
    return (
        <Router>
          <Layout />
        </Router>
    );
  }
}

export default App;
