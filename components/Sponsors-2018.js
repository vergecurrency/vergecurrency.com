import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const sponsorLocale = require('../lists/sponsors-2018').sponsors;

export const Sponsors = () => {
  const Sponsors = sponsorLocale.map(s => (
    <div
      className="col-xs-4 col-sm-3 center-xs pb-xs sponsors__single"
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
        <div className="row start-xs start-xs pb">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '10px 0' }}>Main sponsor</p>
          </div>
          <div className="col-xs">
            <div className="row start-xs middle-xs">
              <div className="col-xs-4 col-sm-3 center-xs pb-xs sponsors__single" role="presentation">
                <a href="https://www.blacktowerfm.com/locations/the-netherlands" target="_blank" rel="noopener">
                  <LazyLoad height="100">
                    <img className="img-responsive sponsors__logo" src="../static/img/meetup-2018/sponsors/blacktower.png" style={{ maxHeight: '100px' }} alt="Blacktower financial management group" />
                  </LazyLoad>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row start-xs start-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>Event sponsors</p>
          </div>

          <div className="col-xs">
            <div className="row center-xs middle-xs">
              {Sponsors}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
