import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const vendorsLocale = require('../locales/index').en.vendors.vendors;

export const LatestVendors = () => {
  const vendors = vendorsLocale.map(x => (
    <div className="col-xs-12 col-sm-4 col-md center-xs middle-xs col--full-height pb--sm" key={x.title}>
      <Link href={x.url}>
        <a href={x.url} className="vendors--url">
          <LazyLoad height={50}>
            <img src={x.img} width="100" alt="img" />
          </LazyLoad>
        </a>
      </Link>
    </div>
  ));

  return (
    <div className="row pt">
      {vendors}
    </div>
  );
};
