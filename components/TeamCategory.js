import i18n from 'i18next';

const TeamCategory = props => (
  <div className="team-category">
    <div className="category-header">
      <h2 className={`category-${i18n.language === 'ar' || i18n.language === 'fa' || i18n.language === 'ku' ? 'title-rtl' : 'title'}`}>{props.title}</h2>
      <hr />
    </div>
    <div className="row between-xs start-sm">{props.children}</div>
  </div>
);

export default TeamCategory;
