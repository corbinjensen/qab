import React, { Component } from 'react';

import chinookLogo from './img/Calgary_Chinook_Fund.png'
import corbinLogo from './img/corbinJensen.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <h1>Queers<br/><span>&</span> Beers</h1>

          <h2>
            Good people
            <br/>Good vibes
            <br/>Good cause
          </h2>

        </header>
        <section className="intro">

          <p>

            Join us for beers after work, we aim to create a casual and inclusive space to bring our whole community together.

          </p>

          <p>

            Proceeds benefit queer youth, elders, trans* folk, and the arts. Through the Calgary Chinook fund.

          </p>

        </section>

        <section className="connect">

          <h3>Connect</h3>

          <p>Click here to mark your calender</p>

          <p>Share with friends</p>

        </section>

          <footer>

            <h3>Partners</h3>

            <div className="chinookFund">

              <a href="http://calgarychinookfund.ca" target="_blank">

                <img src={chinookLogo} alt=""/>

              </a>

            </div>

            <div className="corbinJensen">

              <a href="https://corbinjensen.ca" target="_blank">

                <img src={corbinLogo} alt=""/>

              </a>

            </div>

          </footer>

      </div>

    );
  }
}

export default App;
