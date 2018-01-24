import React from 'react';
import Router from 'next/router';

export default class Navbar extends React.Component {
  componentDidMount() {
    switch (Router.route) {
      case "/":
      case "/presskit": {
        const head = document.getElementById("header");
        window.addEventListener('scroll', () => {
          head.className = window.scrollY > 10 ? 'scroll' : '';
        }, true);

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
    window.removeEventListener('scroll', () => {
      head.className = window.scrollY > 10 ? 'scroll' : '';
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}