import LazyLoad from 'react-lazyload';

const exchangeLocale = require('../lists/exchanges').exchanges;

function getExchangeUrl(exchange) {
  if (!exchange.url || exchange.link !== 'binancecnt.com') {
    return exchange.url;
  }

  if (exchange.url.includes('timestamp=')) {
    return exchange.url.replace(/(timestamp=)[^&]+/, '$1static');
  }

  const separator = exchange.url.includes('?') ? '&' : '?';
  return `${exchange.url}${separator}timestamp=static`;
}

function ExchangeGrid({ exchanges }) {
  return (
    <div className="row start-sm">
      {exchanges.map((exchange) => (
        <div className="col-xs col-md-3" key={exchange.title} role="presentation">
          <a href={getExchangeUrl(exchange)} target="_blank" rel="noopener noreferrer">
            <div className="exchanges--item middle-xs">
              <div className="exchanges--item__logo">
                <LazyLoad height={40}>
                  <img src={exchange.img} alt={exchange.title} />
                </LazyLoad>
              </div>
              <div className="exchanges--item__name">
                <h4>{exchange.title}</h4>
                <span>{exchange.link}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export function HomeExchanges() {
  return <ExchangeGrid exchanges={exchangeLocale.slice(0, 12)} />;
}

export function Exchanges() {
  return <ExchangeGrid exchanges={exchangeLocale} />;
}
