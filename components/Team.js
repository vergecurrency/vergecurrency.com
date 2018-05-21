import Link from 'next/link'

const Team = props => {
  console.log(props)
  return props.members.map(member => (
    <div className="col-xs col-md-3" key={member.name}>
      <div className="team--member pb-xs">
        <img src={member.img} alt={member.name} />
        <div className="flexIt">
          <h3>{member.name}</h3>
          <div className="socials">
            <Link href={member.twitter}>
              <a
                className={`icon iconlink ${member.twitter ? '' : 'hidden'}`}
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon icon--twitter" />
              </a>
            </Link>
            <Link href={member.github}>
              <a
                className={`icon iconlink ${member.github ? '' : 'hidden'}`}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon icon--github" />
              </a>
            </Link>
          </div>
        </div>
        <span>{member.role}</span>
        <p>{member.occupation}</p>
      </div>
    </div>
  ))
}
export default Team
