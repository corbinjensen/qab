import React, { Component } from 'react';

import Header from './cmp/Header.js'
import Intro from './cmp/Intro.js'
import NextEvent from './cmp/NextEvent.js'
import Connect from './cmp/Connect.js'
import Partners from './cmp/Partners.js'
import Footer from './cmp/Footer.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Intro />

        <NextEvent />

        <Connect />

        <Partners />

        <Footer />

      </div>

    );
  }
}

export default App;
