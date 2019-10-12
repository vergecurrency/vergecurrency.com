import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

import { tgadmins } from '../lists/tgadmins.json'

const hasAnySocialContact = (telegramAdmin) => telegramAdmin.twitter || telegramAdmin.telegram
const getSocialClassNames = (social) => Boolean(social) ? 'icon iconlink' : 'icon iconlink hidden'

const TGAdmins = () => {
  const telegramAdmins = tgadmins.map(telegramAdmin => (
    <div className="col-xs-12 col-md-3">
      <div className="team--member tg--admins pb-xs">
        <div className="flexIt">
          <h3>{telegramAdmin.name}</h3>
          {hasAnySocialContact(telegramAdmin) ? <div className="socials">
            <Link href={telegramAdmin.telegram}>
              <a
                className={getSocialClassNames(telegramAdmin.telegram)}
                href={telegramAdmin.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTelegram} size="1x" />
              </a>
            </Link>
            <Link href={telegramAdmin.twitter}>
              <a
                className={getSocialClassNames(telegramAdmin.twitter)}
                href={telegramAdmin.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>
            </Link>
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
}

export default TGAdmins;
