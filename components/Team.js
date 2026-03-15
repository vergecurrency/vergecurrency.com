const Team = props => props.members.map(member => (
  <div className="col-xs col-md-3" key={member.name}>
    <div className="team--member pb-xs">
      <span className="team--member_border">
        <img src={member.img} alt={member.name} />
      </span>
      <div className="flexIt">
        <h3>{member.name}</h3>
        <div className="socials">
          <a
            className={`icon iconlink ${member.twitter ? '' : 'hidden'}`}
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon icon--twitter" />
          </a>
          <a
            className={`icon iconlink ${member.twitter_alt ? '' : 'hidden'}`}
            href={member.twitter_alt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon icon--twitter" />
          </a>
          <a
            className={`icon iconlink ${member.github ? '' : 'hidden'}`}
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon icon--github" />
          </a>
        </div>
      </div>
      <h5>{member.role}</h5>
      <h5><i>{member.location}</i></h5>
      <p className="team--member-occupation">{member.occupation}</p>
      <br />
    </div>
  </div>
));
export default Team;
