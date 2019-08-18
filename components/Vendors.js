import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { shuffle } from './Shuffler';

const vendorsLocale = require('../lists/vendors').vendors;

const shuffledVendors = shuffle(vendorsLocale, 9);

export const HomeVendors = () => {
  const vendors = shuffledVendors.map((x, i) => {
    if (i < 20) {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-3 center-xs middle-xs col--full-height pb--sm"
          key={x.title}
        >
          <Link href={x.url}>
            <a>
              <a
                href={x.url}
                className="vendors--url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoad height={50}>
                  <img src={x.img} width="100" alt="img" />
                </LazyLoad>
              </a>
            </a>
          </Link>
          <br />
          <br />
        </div>
      );
    }
    return true;
  });

  return <div className="row pt">{vendors}</div>;
};

const filterVendorList = (vendors, filters) => vendors.filter(vendor => filters.some(filter => vendor.categories[filter] === true));

export const LatestVendors = ({ filter: categoriesFilter }) => {
  const vendors = filterVendorList(shuffledVendors, categoriesFilter).map(vendor => (
    <div className="col-xs col-md-3" key={vendor.title} role="presentation">
      <a>
        <a href={vendor.url} target="_blank" rel="noopener noreferrer">
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
      </a>
    </div>
  ));

  return <div className="row pt vendors--pad">{vendors}</div>;
};
