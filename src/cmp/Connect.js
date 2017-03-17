import React from 'react'
import MdDateRange from 'react-icons/lib/md/date-range'
import Mdshare from 'react-icons/lib/md/share'
import MdMailOutline from 'react-icons/lib/md/mail-outline'

class Connect extends React.Component {
  render(){
    return (
      <section className="connect">

        <h3>Connect</h3>

        <a href="#">

          <p>
            <MdDateRange/>
            Click here to mark your calender
          </p>
        </a>

        <p><a href="#">
          <Mdshare/>
          Share with friends
        </a></p>

        <p><a href="mailto:c@corbinjensen.ca">
          <MdMailOutline />
          Contact the organizers
        </a></p>

      </section>
    )
  }
}

export default Connect
