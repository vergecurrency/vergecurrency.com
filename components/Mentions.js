import Link from 'next/link';
import LazyLoad from 'react-lazyload';

const mentionLocale = require('../locales/index').en.mentions.mentions;

function mentions() {
  const mentions = mentionLocale.map(x => (
    <div className="col-xs-12 col-sm-4 col-md center-xs middle-xs col--full-height pb-xs" key={x.url}>
      <Link href={x.url}>
        <a href={x.url}>
          <LazyLoad height={50}>
            <img src={x.img} width={x.width} alt="img" />
          </LazyLoad>
        </a>
      </Link>
    </div>
  ));

  return (
    <div className="row center-xs middle-xs pt-xs">
      {mentions}
    </div>
  );
}

export default mentions;
