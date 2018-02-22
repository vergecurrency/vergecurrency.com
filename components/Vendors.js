const vendorsLocale = require('../locales/index').en.vendors.vendors;

function Vendors() {
  const vendors = vendorsLocale.map(x => (
    <div className="col-xs col-md-3" key={x.title}>
      <div className="vendors--item">
        <div className="vendors--item__logo">
          <img src={x.img} width="40" alt="img" />
        </div>
        <div className="vendors--item__name">
          <a href={x.url} target="_blank"><span>{x.title}</span></a>
          <span>{x.link}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row pt">
      {vendors}
    </div>
  );
}

export default Vendors;
