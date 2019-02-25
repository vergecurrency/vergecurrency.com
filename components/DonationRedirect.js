import React from 'react';

export default class DonationRedirect extends React.Component {
  componentDidMount() {
    if (location.protocol === 'https:') {
      window.location.replace('https://goo.gl/forms/VchWxA9LmuDMoNRg1');
    } else {
      location.href = `https:${window.location.href.substring(window.location.protocol.length)}`;
      window.location.replace('https://goo.gl/forms/VchWxA9LmuDMoNRg1');
    }
  }

  render() {
    return (true);
  }
}
