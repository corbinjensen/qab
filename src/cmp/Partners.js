import React from 'react'

import chinookLogo from '../img/Calgary_Chinook_Fund.png'
import corbinLogo from '../img/corbinJensen.svg'
import GuruLogo from '../img/cdn_gurus.png'
import StillLogo from '../img/still.jpeg'
import HomeFront from '../img/HomeFront.png'

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

            <h4>Production Partners</h4>

            <div className="corbinJensen">

              <a href="https://corbinjensen.ca" target="_blank">

                <img src={corbinLogo} alt=""/>

              </a>

            </div>

            <div className="gurus">

              <a href="https://canadianvirtualgurus.com/" target="_blank">

                <img src={GuruLogo} alt=""/>

              </a>

            </div>

            <h4>Community Partner</h4>

            <div className="homeFront">

              <a href="http://homefrontcalgary.com/" target="_blank">

                <img src={HomeFront} alt=""/>

              </a>

            </div>


            <h4>Venue</h4>

            <div className="venue">

              <a href="http://www.thestillfinespirits.com/menu.html" target="_blank">

                <img src={StillLogo} alt=""/>

              </a>

            </div>

          </div>
    )
  }
}

export default Partners
