import React, { Component } from 'react';

class Preloader extends React.Component {
  handleStyles = () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');

      preloader.classList.add('close');

      document.getElementsByTagName("body")[0].style = "overflow: auto";
    }, this.props.disappearTime);

    setTimeout(() => {
      const preloader = document.getElementById('preloader');

      preloader.remove();
    }, this.props.removalTime);
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.bgColor }} ref={'preload'} id={'preloader'}>

        <img src="../static/img/verge-intro.gif" />
        <div id="loader">
          {/* <ul>
            <li style={{backgroundColor: this.props.color}} ></li>
            <li style={{backgroundColor: this.props.color}} ></li>
            <li style={{backgroundColor: this.props.color}} ></li>
            <li style={{backgroundColor: this.props.color}} ></li>
            <li style={{backgroundColor: this.props.color}} ></li>
            <li style={{backgroundColor: this.props.color}} ></li>
          </ul> */}
        </div>
      </div>
    )
  }
}

Preloader.defaultProps = { disappearTime: 1600, removalTime: 1800, bgColor: '#000', color: '#fff' };

export default Preloader;
