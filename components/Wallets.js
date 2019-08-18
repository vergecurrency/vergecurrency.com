import i18n from 'i18next';

const walletsLocale = require('../lists/wallets').wallets;

function Wallets() {
  const wallets = walletsLocale.map((x, i) => {
    if (i > 0) {
      return (
        <div
          className={`col-xs-12 col-sm-6 col-md-4 wallets--item start-xs ${x.available ? '' : 'wallets--item__disabled'}`}
          key={x.name}
        >
          <div className="row-md-12">
            <div className="col-md-2">
              <a href={x.url} target="_blank" rel="noopener noreferrer">
                <div className={`${x.classNames} wallets--${i18n.language === 'ar' || i18n.language === 'fa' || i18n.language === 'ku' ? 'iconrtl' : 'icon'}`} />
              </a>
            </div>
            <div className="col-md-10">
              <span className="wallets--text">
                <h4>
                  <a href={x.url} target="_blank" rel="noopener noreferrer">
                    {x.name}
                  </a>
                </h4>
                <a href={x.url} target="_blank" rel="noopener noreferrer">
                  {x.available ? 'Download here' : 'Available soon!'}
                </a>
                <a href={x.url2} target="_blank" rel="noopener noreferrer">
                  {x.availableinstructions ? 'Install Instructions' : 'Instructions available soon!'}
                </a>
              </span>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="row center-xs start-sm">
      {wallets}
    </div>
  );
}

export default Wallets;
