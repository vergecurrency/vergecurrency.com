import Link from 'next/link';
import Router from 'next/router'

const mentionLocale = require('../locales/index').en.mentions.mentions;

const mentions = function (props) {
  let mentions = [];
  let key = 0;

  mentionLocale.map(x => {
    mentions.push(
      <div className="col-xs-12 col-sm-4 col-md center-xs middle-xs col--full-height pb-xs" key={key}>
        <Link href={x.url}>
          <a><img src={x.img} width={x.width} /></a>
        </Link>
      </div>
    )
    key += 1;
  })

  return (
    <div className="row center-xs middle-xs pt-xs">
      {mentions}
    </div>
  )
}

export default mentions;
