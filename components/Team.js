const teamLocale = require('../locales/index').en.team.team;

function Team() {
  const team = teamLocale.map((x) => {
    return (
      <div className="col-xs col-md-3">
        <div className="team--member pb-xs">
          <img src={x.img} alt={x.name} />
          <h3>{x.name}</h3>
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
