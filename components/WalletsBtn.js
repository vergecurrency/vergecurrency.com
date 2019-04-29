import React from 'react';
import { renderToString } from 'react-dom/server';
import Link from 'next/link';

const platform = require('platform');
const walletsLocale = require('../lists/wallets').wallets;

class WalletsBtn extends React.Component {
  componentDidMount() {
    const wltIndex = walletsLocale.map(x => (x.os)).indexOf(platform.os.family);
    const wlt = (wltIndex !== -1) ? walletsLocale[wltIndex] : walletsLocale[0];
    const wltBtn = () => (
      renderToString(<Link href={wlt.url}>
        <a href={wlt.url} className="btn btn-primary btn-wallet">
          {/*
           Removing the ${wlt.classWhite} temporarily for Right-to-left languages:
           <span className={`wallets--icon ${wlt.classWhite}`}>
          */}
          <span>
            {wlt.name}
          </span>
        </a>
      </Link>)
    );
    document.querySelector('.wallets__button').innerHTML = wltBtn();
  }

  render() {
    return (
      <div className="wallets__button" />
    );
  }
}

export default WalletsBtn;
