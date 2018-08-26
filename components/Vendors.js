import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const vendorsLocale = require('../lists/vendors').vendors;

export const HomeVendors = () => {
  const vendors = vendorsLocale.map((x, i) => {
    if (i < 12) {
      return (
        <div className="col-xs-12 col-sm-6 col-md-3 center-xs middle-xs col--full-height pb--sm" key={x.title}>
          <Link href={x.url}>
            <a href={x.url} className="vendors--url">
              <LazyLoad height={50}>
                <img src={x.img} width="100" alt="img" />
              </LazyLoad>
            </a>
          </Link>
        </div>
      );
    }
    return true;
  });

  return (
    <div className="row pt" >
      {vendors}
    </div >
  );
};

export const LatestVendors = () => {
  const vendors = vendorsLocale.map(x => (
    <div
      className="col-xs col-md-3"
      key={x.title}
      role="presentation"
    >
      <a href={x.url} target="_blank" rel="noopener">
        <div className="vendors--item middle-xs">
          <div className="vendors--item__logo">
            <LazyLoad height={40}>
              <img src={x.img} alt="img" />
            </LazyLoad>
          </div>
          <div className="vendors--item__name">
            <h4>{x.title}</h4>
            <span>{x.link}</span>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="row pt">
      {vendors}
    </div>
  );
};
