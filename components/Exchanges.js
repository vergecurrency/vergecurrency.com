import Link from 'next/link';

const exchangeLocale = require('../locales/index').en.exchanges.exchanges;

const Exchanges = function (props) {
  let exchanges = [];
  let key = 0;
  
  exchangeLocale.map(x => {
    exchanges.push(
      <div className="col-xs col-md-3" key={key}>
        <div className="exchanges--item">
          <div className="exchanges--item__logo">
            <img src={x.img} width="40" />
          </div>
          <div className="exchanges--item__name">
            <span>{x.title}</span>
            <span>{x.link}</span>
          </div>
        </div>
      </div>
    )
    key += 1;
  })

  return (
    <div className="row">
      {exchanges}
    </div>
  )
}

export default Exchanges;
