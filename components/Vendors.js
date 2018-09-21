import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const vendorsLocale = require('../lists/vendors').vendors;

export const HomeVendors = () => {
  const vendors = vendorsLocale.map((x, i) => {
    if (i < 20) {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-3 center-xs middle-xs col--full-height pb--sm"
          key={x.title}
        >
          <Link href={x.url}>
            <a
              href={x.url}
              className="vendors--url"
              target="_blank"
              rel="noopener"
            >
              <LazyLoad height={50}>
                <img src={x.img} width="100" alt="img" />
              </LazyLoad>
            </a>
          </Link>
          <br /> <br />
        </div>
      );
    }
    return true;
  });

  return <div className="row pt">{vendors}</div>;
};

const checkIfFilterIsOff = filters =>
  Object.values(filters).every(val => val === false);

const filterObject = obj => {
  const result = {};
  for (const key in obj) {
    if (obj[key] === true) result[key] = true;
  }

  return result;
};

const filterVendorList = (vendors, filters) => {
  const clearedFilter = filterObject(filters);
  if (checkIfFilterIsOff(filters)) {
    return vendors;
  }
  return vendors.filter(vendor => {
    let fits = 0;
    for (const key in clearedFilter) {
      if (vendor.categories[key] === clearedFilter[key]) fits += 1;
    }
    return fits === Object.keys(clearedFilter).length;
  });
};

export const LatestVendors = categoriesFilter => {
  const vendors = filterVendorList(vendorsLocale, categoriesFilter).map(
    vendor => (
      <div className="col-xs col-md-3" key={vendor.title} role="presentation">
        <a href={vendor.url} target="_blank" rel="noopener">
          <div className="vendors--item middle-xs">
            <div className="vendors--item__logo">
              <LazyLoad height={40}>
                <img src={vendor.img} alt="img" />
              </LazyLoad>
            </div>
            <div className="vendors--item__name">
              <h4>{vendor.title}</h4>
              <span>{vendor.link}</span>
            </div>
          </div>
        </a>
      </div>
    )
  );

  return <div className="row pt">{vendors}</div>;
};
