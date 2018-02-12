import React, { Component } from 'react';
import CryptowatchEmbed from 'cryptowatch-embed';

class Coinchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinData: []
    }
  }

  componentDidMount() {
    let chart = new CryptowatchEmbed('bittrex', 'xvgbtc', {
      height: 500,
      timePeriod: "4h"
    });
    chart.mount('#chart-container');
  }

  render() {
    return (
        <div id="chart-container" className="pb"></div>
      )
  }
}

export default Coinchart;
