import Link from 'next/link';

const vendorsLocale = require('../locales/index').en.vendors.vendors;

const Vendors = function (props) {
  let vendors = [];
  let key = 0;

  vendorsLocale.map(x => {
    vendors.push(
      <div className="col-xs col-md-3" key={key}>
        <div className="vendors--item">
          <div className="vendors--item__logo">
            <img src={x.img} width="40" />
          </div>
          <div className="vendors--item__name">
            <a href={x.url} target="_blank"><span>{x.title}</span></a>
            <span>{x.link}</span>
          </div>
        </div>
      </div>
    )
    key += 1;
  })

  return (
    <div className="row pt">
      {vendors}
    </div>
  )
}

export default Vendors;
