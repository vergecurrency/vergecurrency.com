import Link from 'next/link';
import { translate } from 'react-i18next';
import i18n from '../i18n';



const Exchanges = function (props) {
  const { t } = props;

  let exchanges = [];
  for (let i = 1; i < 6; i++){
    exchanges.push(
      <div className="col-md-3" key={i}>
        <div className="exchanges--item">
          <div className="exchanges--item__logo">
            <img src={t("home:exchanges:exchange_" + i + ":img")} width={t("home:exchanges:exchange_" + i + ":img_width")} />
          </div>
          <div className="exchanges--item__name">
            <span>{t("home:exchanges:exchange_" + i + ":title")}</span>
            <span>{t("home:exchanges:exchange_" + i + ":link")}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      {exchanges}
    </div>
  )
}

const Extended = translate(['home'], { i18n, wait: process.browser })(Exchanges);

export default Extended;