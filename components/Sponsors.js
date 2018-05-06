import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const sponsorLocale = require('../locales/index').en.sponsors.sponsors;

export const Sponsors = () => {
  const Sponsors = sponsorLocale.map(s => (
    <div
      className="col-xs-4 col-md-2 center-xs pb-xs"
      key={s.title}
      role="presentation"
    >
      <a href={s.url} target="_blank" rel="noopener">
        <LazyLoad height={s.height}>
          <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
        </LazyLoad>
      </a>
    </div>
  ));

  return (
    <div className="row center-xs sponsors">
      <div className="col-xs-10 pt-small pb-small bb">
        <div className="row middle-xs center-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p>Event sponsors</p>
          </div>

          <div className="col-xs center-sm">
            <div className="row middle-xs">
              {Sponsors}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
