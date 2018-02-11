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
          {/* TODO: Keep this clean. Translations aren't meant for this.. */ }
          <img src={x.img} width={x.img_width} />
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
