import Link from 'next/link';

const TGAdminsLocale = require('../lists/tgadmins').tgadmins;
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faTelegram,
} from '@fortawesome/fontawesome-free-brands';

function TGAdmins() {
  const tgadmins = TGAdminsLocale.map((tgadmins) => {   
      return (
        <div className="col-xs col-md-3">
        <div className="team--member pb-xs">          
          <div className="flexIt">
            <h3>{tgadmins.name}</h3>
            <div className="socials">
              <Link href={tgadmins.telegram}>
                <a
                  className={`icon iconlink ${tgadmins.telegram ? '' : 'hidden'}`}
                  href={tgadmins.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTelegram} size="1x" />
                </a>
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>     
      );
    
  });
  return (
    <div className="row center-xs start-sm">
      {tgadmins}
    </div>
  );  
}

export default TGAdmins;
