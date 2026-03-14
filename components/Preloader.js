import React from 'react';

class Preloader extends React.Component {
  static defaultProps = {
    disappearTime: 1680,
    removalTime: 2030,
    bgColor: '#000',
    color: '#4cc2f1',
  };

  state = {
    active: true,
    closing: false,
  };

  bodyStyleSnapshot = null;

  componentDidMount() {
    this.lockBodyScroll();
    this.handleStyles();
  }

  componentWillUnmount() {
    this.unlockBodyScroll();
  }

  handleStyles = () => {
    setTimeout(() => {
      this.setState({ closing: true });
      this.unlockBodyScroll();
    }, this.props.disappearTime);

    setTimeout(() => {
      this.setState({ active: false });
    }, this.props.removalTime);
  };

  lockBodyScroll = () => {
    const currentPaddingRight = window.getComputedStyle(document.body).paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    this.bodyStyleSnapshot = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      const parsedPaddingRight = parseFloat(currentPaddingRight) || 0;
      document.body.style.paddingRight = `${parsedPaddingRight + scrollbarWidth}px`;
    }
  };

  unlockBodyScroll = () => {
    if (!this.bodyStyleSnapshot) {
      return;
    }

    document.body.style.overflow = this.bodyStyleSnapshot.overflow;
    document.body.style.paddingRight = this.bodyStyleSnapshot.paddingRight;
    this.bodyStyleSnapshot = null;
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
