import Link from 'next/link';
import LazyLoad from 'react-lazyload';

import Moment from 'react-moment';
import 'moment-timezone';

const mentionLocale = require('../lists/mentions').mentions;
export const Mentions = ({ t }) => {
  const mentions = mentionLocale.map((x, i) => {
    if (i < 12) {
      return (
        <div className="col-xs-12 col-sm-4 col-md center-xs middle-xs col--full-height pb-xs" key={x.url}>
          <Link href={x.url}>
            <a href={x.url}>
              <LazyLoad height={500}>
                <img src={x.img} width={x.width} alt="img" />
              </LazyLoad>
            </a>
          </Link>
        </div>
      );
    }
    return true;
  });

  return (
    <div className="row center-xs middle-xs pt-xs">
      {mentions}
    </div>
  );
};

export const FullMentions = () => {
  const fullmentions = mentionLocale.map(x => (
    <div className="col-xs-12 col-sm-4 start-xs pb-xs pb" key={x.url}>
      <div className="row">
        <div className="col-xs-12 coverage--logo">
          <Link href={x.url}>
            <a href={x.url} className="date">
              <LazyLoad height={500}>
                <img src={x.img} alt={x.title} />
              </LazyLoad>
            </a>
          </Link>
        </div>
        <div className="col-xs-12 coverage--text">
          <Link href={x.url}>
            <a href={x.url} className="date">
              <div>
                <h4 dangerouslySetInnerHTML={{ __html: x.title }} />
                <Moment>
                  {x.date}
                </Moment>
                {' '}
                - Read
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="row start-xs pt-small pb pb-xs-0">
      {fullmentions}
    </div>
  );
};
