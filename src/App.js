import React, { Component } from 'react';

import Header from './cmp/Header.js'
import Intro from './cmp/Intro.js'
import Connect from './cmp/Connect.js'
import Footer from './cmp/Footer.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Intro />

        <Connect />

        <Footer />

      </div>

    );
  }
}

export default App;
