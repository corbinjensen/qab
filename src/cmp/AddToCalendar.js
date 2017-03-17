import React from 'react'

class AddToCalendar extends React.Component {
  render(){
    return (
        <span className="spanHeightOR addtocalendar atc-style-blue">
        <var className="atc_event">
            <var className="atc_date_start">2017-03-22 17:00:00</var>
            <var className="atc_date_end">2017-03-22 20:00:00</var>
            <var className="atc_timezone">America/Edmonton</var>
            <var className="atc_title">Queers & Beers</var>
            <var className="atc_description">

              Queers & Beers - Good People, Good Vibes, Good Cause.

              Join us for beers after work, we aim to create a casual and inclusive space to bring our whole community together.

              Proceeds benefit queer youth, elders, trans* folk, and the arts. Through the Calgary Chinook fund.

              $4 Drink Specials all night.

              Accessibility: Bar is located at-grade in a new condo building build to modern access standards.
            </var>
            <var className="atc_location">The Still - 270 14 Ave SE, Calgary, AB T2G 0L3</var>
            <var className="atc_organizer">Queers & Beers</var>
            <var className="atc_organizer_email">qab@corbinjensen.ca</var>
        </var>
      </span>
    )
  }
}

export default AddToCalendar
