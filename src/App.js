import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from './components/layouts/Layout.js';

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
