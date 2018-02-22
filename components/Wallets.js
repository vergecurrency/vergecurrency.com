const walletsLocale = require('../locales/index').en.wallets.wallets;

function Wallets() {
  const wallets = walletsLocale.map(x => (
    <div
      className={`col-xs-9 col-md-3 wallets--item start-xs ${x.available ? '' : 'wallets--item__disabled'}`}
      key={x.name}
    >
      <a href={x.url}>
        <div className="wallets--icon" />
        <div className="wallets--text">
          <h4>{x.name}</h4>
          <span>{x.available ? 'Download here' : 'Available soon!'}</span>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="row">
      {wallets}
    </div>
  );
}

export default Wallets;
