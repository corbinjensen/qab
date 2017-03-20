import React from 'react'

import chinookLogo from '../img/Calgary_Chinook_Fund.png'
import corbinLogo from '../img/corbinJensen.svg'
import GuruLogo from '../img/cdn_gurus.png'
import Alison from '../img/AlisonLang-Logo-Color.jpeg'
import StillLogo from '../img/still.jpeg'

class Partners extends React.Component {
  render(){
    return (
          <section className="partners">

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

            <div className="allison">

              <a href="http://www.remaxcentral.ab.ca/idx/realtors/alisonlang/" target="_blank">

                <img src={Alison} alt=""/>

              </a>

            </div>


            <h4>Venue</h4>

            <div className="venue">

              <a href="http://www.thestillfinespirits.com/menu.html" target="_blank">

                <img src={StillLogo} alt=""/>

              </a>

              <p>
                Located centrally by the Victoria Park / Stampede LRT.
                Serving drinks and delicious, made from scratch cuisine.
              </p>

            </div>

          </section>
    )
  }
}

export default Partners
