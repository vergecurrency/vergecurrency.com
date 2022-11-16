import LazyLoad from 'react-lazyload';
import { shuffle } from './Shuffler';

const exchangeLocale = require('../lists/exchanges').exchanges
exchangeLocale.map((x, i) => {
  if (x.link === 'binancecnt.com') {
    if (x.url.includes('&timestamp=')) {
      x.url.replace(/(timestamp=)[^\&]+/, '$1' + new Date().valueOf())
    } else {
      x.url += '&timestamp=' + new Date().valueOf()
    }
  }
});
const shuffledExchanges = shuffle(exchangeLocale, 5);

export const HomeExchanges = () => {
  const exchanges = shuffledExchanges.map((x, i) => {
    if (i < 12) {
      return (
        <div
          className="col-xs col-md-3"
          key={x.title}
          role="presentation"
        >
          <a>
            <a href={x.url} target="_blank" rel="noopener noreferrer">
              <div className="exchanges--item middle-xs">
                <div className="exchanges--item__logo">
                  <LazyLoad height={40}>
                    <img src={x.img} alt="img" />
                  </LazyLoad>
                </div>
                <div className="exchanges--item__name">
                  <h4>{x.title}</h4>
                  <span>{x.link}</span>
                </div>
              </div>
            </a>
          </a>
        </div>
      );
    }
    return true;
  });

  return (
    <div className="row start-sm">
      {exchanges}
    </div>
  );
};

export const Exchanges = () => {
  const exchanges = shuffledExchanges.map(x => {
    return (
      <div
        className="col-xs col-md-3"
        key={x.title}
        role="presentation"
      >
        <a>
          <a href={x.url} target="_blank" rel="noopener noreferrer">
            <div className="exchanges--item middle-xs">
              <div className="exchanges--item__logo">
                <LazyLoad height={40}>
                  <img src={x.img} alt="img" />
                </LazyLoad>
              </div>
              <div className="exchanges--item__name">
                <h4>{x.title}</h4>
                <span>{x.link}</span>
              </div>
            </div>
          </a>
        </a>
      </div>
    )
  });

  return (
    <div className="row start-sm">
      {exchanges}
    </div>
  );
};
