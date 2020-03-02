import RadialProgress from '../components/RadialProgress';

const roadMap = [
  {
    //done: true,
    //doneDate: '1st January 2018',
    title: 'Quarter 3, 2019',
    description: '<a href="https://paycent.com/">Paycent</a> Partnership<br><a href="https://www.xceltrip.com/">XcelTrip</a> Partnership<br><a href="https://www.xcelpay.io/">XcelPay</a> Partnership<br>iOS Update v1.1.1<br><a href="https://www.abra.com/">Abra</a> adds Verge support to their platform.<br><A href="https://nowpayments.io/">NowPayments</a> and <a href="https://nownodes.io/">NowNodes</a> integrate Verge into their platform.<br>Verge <a href="https://verge.zendesk.com/hc/en-us">ZenDesk</a> implemented',
    //progress: 100,
    //progressState: '',
  },
  {
    //done: true,
    //doneDate: '24th March 2018',
    title: 'Quarter 4, 2019',
    description: 'Verge added to <a href="https://www.bitnovo.com/">BitNovo</a> Exchanges',
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
