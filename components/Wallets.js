import Link from 'next/link';

const walletsLocale = require('../locales/index').en.wallets.wallets;

function Wallets() {
  const wallets = walletsLocale.map((x, i) => {
    if (i > 0) {
      return (
        <div
          className={`col-xs-12 col-sm-6 col-md-4 wallets--item start-xs ${x.available ? '' : 'wallets--item__disabled'}`}
          key={x.name}
        >
          <a href={x.url} target="_blank" rel="noopener noreferrer">
            <span className={`wallets--icon ${x.classNames}`} />
          </a>
          <span className="wallets--text">
            <h4>
              <a href={x.url} target="_blank" rel="noopener noreferrer">
                {x.name}
              </a>
            </h4>
            <a href={x.url} target="_blank" rel="noopener noreferrer">
              {x.available ? 'Download here' : 'Available soon!'}
            </a>
            <a href={x.url2} target="_blank" rel="noopener noreferrer">
              {x.availableinstructions ? 'Install Instructions' : 'Instructions available soon!'}
            </a>
          </span>
        </div>
      );
    }
  });

  return (
    <div className="row center-xs start-sm">
      {wallets}
    </div>
  );
}

export default Wallets;
