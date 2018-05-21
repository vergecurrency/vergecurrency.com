const TeamCategory = props => (
  <div className="team-category">
    <div className="category-header">
      <h2 className="category-title">{props.title}</h2>
      <hr />
    </div>
    <div className="row between-xs start-sm">{props.children}</div>
  </div>
)

export default TeamCategory
