import Link from 'next/link';

const mentionLocale = require('../locales/index').en.mentions.mentions;

function mentions() {
  const mentions = mentionLocale.map(x => (
    <div className="col-xs-12 col-sm-4 col-md center-xs middle-xs col--full-height pb-xs" key={x.url}>
      <Link href={x.url}>
        <a href={x.url}>
          <img src={x.img} width={x.width} alt="img" />
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
