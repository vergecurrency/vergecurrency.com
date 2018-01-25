import React from 'react';
import Router from 'next/router';

export default class Navbar extends React.Component {

  scrollEvent = () => {
    document.getElementById("header").className = window.scrollY > 10 ? 'scroll' : '';
  }

  componentDidMount() {
    switch (Router.route) {
      case "/":
      case "/presskit": {
        window.addEventListener('scroll', this.scrollEvent, true);

        break;
      }
      default: {
        document.getElementById("header").className = 'scroll';

        break;
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  render() {
    return (
      true
    );
  }
}