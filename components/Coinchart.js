import React from 'react';
//import CryptowatchEmbed from 'cryptowatch-embed';

class Coinchart extends React.Component {
  componentDidMount() {
    /*const chart = new CryptowatchEmbed('bittrex', 'xvgbtc', {
      height: 500,
      timePeriod: '4h',
    });
    chart.mount('#chart-container');*/
  }

  render() {
    return (
      <div id="chart-container" className="pb" />
    );
  }
}

export default Coinchart;
