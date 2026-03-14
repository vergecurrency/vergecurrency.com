import React from 'react';

class Preloader extends React.Component {
  static defaultProps = {
    disappearTime: 2400,
    removalTime: 2900,
    bgColor: '#000',
    color: '#4cc2f1',
  };

  state = {
    active: true,
    closing: false,
  };

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    this.handleStyles();
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  handleStyles = () => {
    setTimeout(() => {
      this.setState({ closing: true });
      document.body.style.overflow = 'auto';
    }, this.props.disappearTime);

    setTimeout(() => {
      this.setState({ active: false });
    }, this.props.removalTime);
  };

  render() {
    const { active, closing } = this.state;
    const { bgColor, color } = this.props;

    if (!active) {
      return null;
    }

    return (
      <div
        style={{ backgroundColor: bgColor, '--intro-accent': color }}
        id="preloader"
        className={closing ? 'close' : ''}
      >
        <div className="preloader__grid" />
        <div className="preloader__glow preloader__glow--one" />
        <div className="preloader__glow preloader__glow--two" />
        <div className="preloader__scanline" />
        <div className="preloader__content">
          <div className="preloader__mark">
            <span className="preloader__ring preloader__ring--outer" />
            <span className="preloader__ring preloader__ring--inner" />
            <span className="preloader__core" />
          </div>
          <div className="preloader__wordmark">VERGE</div>
          <div className="preloader__subtitle">Privacy. Speed. Utility.</div>
          <div className="preloader__status">Initializing secure network...</div>
          <div className="preloader__signal">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
