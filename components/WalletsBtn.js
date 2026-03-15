import React from 'react';
import Link from 'next/link';

const platform = require('platform');
const walletsLocale = require('../lists/wallets').wallets;

class WalletsBtn extends React.Component {
  state = {
    wallet: null,
  };

  componentDidMount() {
    const wltIndex = walletsLocale.map(x => (x.os)).indexOf(platform.os.family);
    const wlt = (wltIndex !== -1) ? walletsLocale[wltIndex] : walletsLocale[0];
    this.setState({ wallet: wlt });
  }

  render() {
    const { wallet } = this.state;

    if (!wallet) {
      return <div className="wallets__button" />;
    }

    return (
      <div className="wallets__button">
        <Link href={wallet.url}>
          <a href={wallet.url} className="btn btn-primary btn-wallet">
            <span>
              {wallet.name}
            </span>
          </a>
        </Link>
      </div>
    );
  }
}

export default WalletsBtn;
