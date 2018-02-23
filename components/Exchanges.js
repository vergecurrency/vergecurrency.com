const exchangeLocale = require('../locales/index').en.exchanges.exchanges;

function Exchanges() {
  const exchanges = exchangeLocale.map(x => (
    <div
      className="col-xs col-md-3"
      key={x.title}
      onClick={() => { location.href = x.url; }}
      onKeyDown={() => { location.href = x.url; }}
      role="presentation"
    >
      <div className="exchanges--item middle-xs">
        <div className="exchanges--item__logo">
          <img src={x.img} width="40" alt="img" />
        </div>
        <div className="exchanges--item__name">
          <h4>{x.title}</h4>
          <span>{x.link}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row">
      {exchanges}
    </div>
  );
}

export default Exchanges;
