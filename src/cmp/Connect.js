import React from 'react'
import AddToCalendar from './AddToCalendar'

import MdDateRange from 'react-icons/lib/md/date-range'
import Mdshare from 'react-icons/lib/md/share'
import MdMailOutline from 'react-icons/lib/md/mail-outline'

class Connect extends React.Component {
  render(){
    return (
      <section className="connect">

        <h3>Connect</h3>

          <div>

            <MdDateRange/>
            <AddToCalendar />

          </div>

        <p><a href="mailto:yourfriends@example.com?Subject=Lets%20Check%20Out%20Queers%20%26%20Beers%20This%20Wednesday&Body=%0A%0Awww.queersandbeers.ca">
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
