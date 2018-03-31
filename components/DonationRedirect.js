import React from 'react';

export default class DonationRedirect extends React.Component {
  componentDidMount() {
    window.location.replace('https://goo.gl/forms/VchWxA9LmuDMoNRg1');
  }

  render() {
    return (true);
  }
}
