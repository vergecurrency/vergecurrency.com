import Link from 'next/link';
import Router from 'next/router'

const walletsLocale = require('../locales/index').en.wallets.wallets;
const walletClassName = require('../locales/index').en.wallets.wallets.className;

const Wallets = function (props) {
  let wallets = [];
  let key = 0;

  walletsLocale.map(x => {
    wallets.push(
      <div className={"col-xs-9 col-md-3 wallets--item start-xs" + x.available ? "" : "wallets--item__disabled"} key={key}>
        <a href={x.url}>
          <div className="wallets--icon"></div>
          <div className={"wallets--text"}>
            <h4>{x.name}</h4>
            <span>{x.available ? "Download here" : "Available soon!"}</span>
          </div>
        </a>
      </div>
    )
    key += 1;
  })

  return (
    <div className="row">
      {wallets}
    </div>
  )
}

export default Wallets;
