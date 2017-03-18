import React from 'react'

import chinookLogo from '../img/Calgary_Chinook_Fund.png'
import corbinLogo from '../img/corbinJensen.svg'
import GuruLogo from '../img/cdn_gurus.png'
import StillLogo from '../img/still.jpeg'
import HomeFront from '../img/HomeFront.png'

class Partners extends React.Component {
  render(){
    return (
          <section className="partners">

            <h3>Partners</h3>

            <div className="chinookFund">

              <a href="http://calgarychinookfund.ca" target="_blank">

                <img src={chinookLogo} alt=""/>

              </a>

              <p>
                100% of your donation benefits queer youth, elders,
                trans* folk, and the arts.
              </p>

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

            // <h4>Community Partner</h4>
            //
            // <div className="homeFront">
            //
            //   <a href="http://homefrontcalgary.com/" target="_blank">
            //
            //     <img src={HomeFront} alt=""/>
            //
            //   </a>
            //
            //     <p>
            //       Creating a safe community by <strong>eliminating domestic
            //       violence </strong>
            //       through direct client services, justice coordination
            //       and facilitated community action.
            //     </p>
            //
            // </div>


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
