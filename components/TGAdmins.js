import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import tgAdminsData from '../lists/tgadmins.json';

const hasAnySocialContact = (telegramAdmin) => telegramAdmin.twitter || telegramAdmin.telegram
const getSocialClassNames = (social) => Boolean(social) ? 'icon iconlink' : 'icon iconlink hidden'

const TGAdmins = () => {
  const telegramAdmins = tgAdminsData.tgadmins.map((telegramAdmin) => (
    <div className="col-xs-12 col-md-3">
      <div className="team--member tg--admins pb-xs">
        <div className="flexIt">
          <h3>{telegramAdmin.name}</h3>
          {hasAnySocialContact(telegramAdmin) ? <div className="socials">
            <a
              className={getSocialClassNames(telegramAdmin.telegram)}
              href={telegramAdmin.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTelegram} size="1x" />
            </a>
            <a
              className={getSocialClassNames(telegramAdmin.twitter)}
              href={telegramAdmin.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
          </div> : null}
        </div>
        <br />
      </div>
    </div>
  ));

  return (
    <div className="row center-xs start-sm">
      {telegramAdmins}
    </div>
  );
};

export default TGAdmins;
