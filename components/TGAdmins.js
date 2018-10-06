import Link from 'next/link';

const TGAdminsLocale = require('../lists/tgadmins').tgadmins;

function TGAdmins() {
  const tgadmins = TGAdminsLocale.map((tgadmins) => {   
      return (
        <div className="col-xs col-md-3">
        <div className="team--member pb-xs">          
          <div className="flexIt">
            <h3>{tgadmins.name}</h3>
            <div className="socials">
              <Link href={tgadmins.twitter}>
                <a
                  className={`icon iconlink ${tgadmins.twitter ? '' : 'hidden'}`}
                  href={tgadmins.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon icon--twitter" />
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
