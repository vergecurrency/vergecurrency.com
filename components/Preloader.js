import React from 'react';

class Preloader extends React.Component {
  static defaultProps = {
    disappearTime: 1600,
    removalTime: 1800,
    bgColor: '#000',
    color: '#fff',
  };

  handleStyles = () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');

      if (!preloader) return;

      preloader.classList.add('close');

      document.body.style.overflow = 'auto';
    }, this.props.disappearTime);

    setTimeout(() => {
      const preloader = document.getElementById('preloader');

      if (preloader) {
        preloader.remove();
      }
    }, this.props.removalTime);
  };

  render() {
    const { bgColor } = this.props;

    return (
      <div style={{ backgroundColor: bgColor }} id="preloader">
        <img src="/static/img/verge-intro.gif" alt="Verge loading animation" />
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
    );
  }
}

export default Preloader;
