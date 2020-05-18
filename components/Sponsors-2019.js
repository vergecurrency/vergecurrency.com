import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { shuffle } from './Shuffler';

const sponsorList = require('../lists/sponsors-2019').sponsors;

export const Sponsors = () => {
  const WhalePackage = sponsorList.whalePkg.map(s => (
    <div
      className="col-xs-6 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a href={s.url} target="_blank" rel="noopener noreferrer">
        <LazyLoad height={s.height}>
          <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
        </LazyLoad>
      </a>
    </div>
  ));

  const DolphinPackage = shuffle(sponsorList.dolphinPkg).map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a>
        <a href={s.url} target="_blank" rel="noopener noreferrer">
          <LazyLoad height={s.height}>
            <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
          </LazyLoad>
        </a>
      </a>
    </div>
  ));

  const GoldfishPackage = shuffle(sponsorList.goldfishPkg).map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a>
        <a href={s.url} target="_blank" rel="noopener noreferrer">
          <LazyLoad height={s.height}>
            <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
          </LazyLoad>
        </a>
      </a>
    </div>
  ));

  const MediaPartners = shuffle(sponsorList.mediaPartners).map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a>
        <a href={s.url} target="_blank" rel="noopener noreferrer">
          <LazyLoad height={s.height}>
            <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
          </LazyLoad>
        </a>
      </a>
    </div>
  ));

  const VergeFam = shuffle(sponsorList.vergeFam).map(s => (
    <div
      className="col-xs-3 col-sm-3 center-xs pb-xs sponsors__single"
      key={s.title}
      role="presentation"
    >
      <a>
        <a href={s.url} target="_blank" rel="noopener noreferrer">
          <LazyLoad height={s.height}>
            <img className="img-responsive sponsors__logo" src={s.img} style={{ maxHeight: s.height }} alt={s.title} />
          </LazyLoad>
        </a>
      </a>
    </div>
  ));

  return (
    <div className="row center-xs sponsors">
      <div className="col-xs-11 pt-small pb-large bb">

        <div className="row start-xs middle-xs pt">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>
              Whale
              <br className="hidden-sm" />
              {' '}
              Sponsors
            </p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {WhalePackage}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>
              Dolphin
              <br className="hidden-sm" />
              {' '}
              Sponsors
            </p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {DolphinPackage}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>
              Goldfish
              <br className="hidden-sm" />
              {' '}
              Sponsors
            </p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {GoldfishPackage}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>
              Media
              <br className="hidden-sm" />
              {' '}
              Partners
            </p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {MediaPartners}
            </div>
          </div>
        </div>

        <div className="row start-xs middle-xs">
          <div className="col-xs-12 col-sm-3 col-lg-2 end-sm">
            <p style={{ textAlign: 'left', padding: '20px 0' }}>
              #VergeFam
              <br className="hidden-lg" />
              {' '}
              Partners
            </p>
          </div>

          <div className="col-xs">
            <div className="row middle-xs">
              {VergeFam}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
