import Link from 'next/link';

const platform = require('platform');
const walletsLocale = require('../locales/index').en.wallets.wallets;

function WalletsBtn(props) {
  const { t } = props;
  const walletsBtn = walletsLocale.map((x) => {
    if (platform.os.family === x.os) {
      return (
        <Link href={x.url} key={x.name}>
          <a href={x.url} className="btn btn-primary btn-wallet">
            <span className={`wallets--icon ${x.classWhite}`}> {t('home:ribbon.buttonPrimary')} </span>
          </a>
        </Link>
      );
    }

    return true;
  });

  return (
    <div>
      {walletsBtn}
    </div>
  );
}

export default WalletsBtn;
