import RadialProgress from '../components/RadialProgress';

const roadMap = [
  {
    //done: true,
    //doneDate: '1st January 2018',
    title: 'Quarter 3, 2019',
    description: 'Paycent Partnership %0D%0A XcelTrip Partnership %0D%0A XcelPay Partnership %0D%0A  iOS Update v1.1.1 %0D%0A  Abra adds Verge support to their platform. %0D%0A NowPayments and NowNodes integrate Verge into their platform. %0D%0A Verge ZenDesk implemented',
    //progress: 100,
    //progressState: '',
  },
  {
    //done: true,
    //doneDate: '24th March 2018',
    title: 'Quarter 4, 2019',
    description: 'Verge added to BitNovo Exchanges',
    //progress: 100,
    //progressState: '',
  },
  {
    //done: true,
    //doneDate: '9th June 2018',
    title: 'Quarter 1, 2020',
    description: '',
    //progress: 100,
    //progressState: '',
  },
  {
    //done: true,
    //doneDate: '24th June 2018',
    title: 'Quarter 2, 2020',
    description: 'TBD!',
    //progress: 100,
    //progressState: '',
  },
];

export default ({ start = 0, maxLength = roadMap.length }) =>
  roadMap.slice(start, start + maxLength).map(mapItem => (
    <li
      className={`roadmap__item roadmap__item--${
        mapItem.done ? 'done' : 'planned'
      }`}
    >
      <h3>{mapItem.title}</h3>
      {mapItem.description} <br />
      {mapItem.done ? (
        <div className="roadmap-update-progress">
          <span>Released</span>{' '}
          <div className="progress progress-text">{mapItem.doneDate}</div>
        </div>
      ) : (
        <RadialProgress
          percentage={mapItem.progress}
          text={mapItem.progressState}
        />
      )}
    </li>
  ));
