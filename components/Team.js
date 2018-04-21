import Link from 'next/link';

const teamLocale = require('../locales/index').en.team.team;

function Team() {
  const team = teamLocale.map((x) => {
    return (
      <div className="col-xs col-md-3" key={x.name}>
        <div className="team--member pb-xs">
          <img src={x.img} alt={x.name} />
          <div className="flexIt">
            <h3>{x.name}</h3>
            <div className="socials">
              <Link href={x.twitter}>
                <a className={`icon iconlink ${x.twitter ? '' : 'hidden'}`} href={x.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="icon icon--twitter" />
                </a>
              </Link>
              <Link href={x.github}>
                <a className={`icon iconlink ${x.github ? '' : 'hidden'}`} href={x.github} target="_blank" rel="noopener noreferrer">
                  <i className="icon icon--github" />
                </a>
              </Link>
            </div>
          </div>
          <span>{x.role}</span>
          <p>{x.occupation}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="row between-xs start-sm">
      {team}
    </div>
  );
}

export default Team;
