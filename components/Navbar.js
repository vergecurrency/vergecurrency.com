import React from 'react';
import Router from 'next/router';

export default class Navbar extends React.Component {

  scrollEvent = () => {
    const head = document.getElementById("header");
    head.className = window.scrollY > 10 ? 'scroll' : '';
  }

  componentDidMount() {
    switch (Router.route) {
      case "/":
      case "/presskit": {
        window.addEventListener('scroll', this.scrollEvent, true);

        break;
      }
      default: {
        const head = document.getElementById("header");
        head.className = 'scroll';

        break;
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  render() {
    return (
      <div></div>
    );
  }
}