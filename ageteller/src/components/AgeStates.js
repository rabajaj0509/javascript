import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component {
  timeSince(date) {
    const today = new Date().getTime();
    const otherDate = new Date(date).getTime();
    const difference = Math.abs(today - otherDate);

    let days = Math.floor(difference / (1000*3600*24));
    const years = Math.floor(days/365);
    days -= years*365;
    const months = Math.floor(days/31);
    days -= months*31;

    return `${years} years, ${months} months, ${days} days`
  }

  render() {
    return (
      <div>
        <h3>
          {this.props.date}
        </h3>
        <h4>
          Congrats on {this.timeSince(this.props.date)}
        </h4>
        <img src={partyPopper} />
      </div>
    )
  }
}

export default AgeStats;