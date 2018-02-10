import React, { Component } from 'react';

import Router from 'next/router';

export default class Navbar extends React.Component {
  scrollEvent = () => {
    document.getElementById("layout").className = window.scrollY > 10 ? 'scroll' : '';
  }

  componentDidMount() {
    switch (Router.route) {
      case "/pressreleases": {
        document.getElementById("header").className = 'solid';

        break;
      }
    }

    switch (Router.route) {
      case "/":
      case "/index":
      case "/presskit":
      case "/pressreleases":
      {
        window.addEventListener('scroll', this.scrollEvent, true);
        this.scrollEvent();

        break;
      }

      default:
      {
        document.getElementById("header").className = 'solid';

        break;
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  render() {
    return (true);
  }
}
