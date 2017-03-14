import React from 'react'

import chinookLogo from '../img/Calgary_Chinook_Fund.png'
import corbinLogo from '../img/corbinJensen.svg'

class Partners extends React.Component {
  render(){
    return (
          <div className="partners">

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

          </div>
    )
  }
}

export default Partners
