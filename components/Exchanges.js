import Link from 'next/link';

const theThing = require('../locales/index');

console.log("Logging translations", theThing);

const Exchanges = function (props) {

  let exchanges = [];
  let key = 0;
  
  theThing.en.exchanges.exchanges.map(x => {
    exchanges.push(
      <div className="col-xs col-md-3" key={key}>
       <div className="exchanges--item">
        <div className="exchanges--item__logo">
          {/* TODO: Keep this clean. Translations aren't meant for this.. */ }
          <img src={x.img} width={x.img_width} />
        </div>
        <div className="exchanges--item__name">
          <span>{x.title}</span>
          <span>{x.link}</span>
        </div>
      </div>
    </div>
    )
    key += 1;
  })

  // for (let i = 1; i < 6; i++){
  //   exchanges.push(
  //     <div className="col-xs col-md-3" key={i}>
  //       <div className="exchanges--item">
  //         <div className="exchanges--item__logo">
  //           {/* TODO: Keep this clean. Translations aren't meant for this.. */ }
  //           <img src={t("home:exchanges.exchange_" + i + ".img")} width={t("home:exchanges.exchange_" + i + ".img_width")} />
  //         </div>
  //         <div className="exchanges--item__name">
  //           <span>{t("home:exchanges.exchange_" + i + ".title")}</span>
  //           <span>{t("home:exchanges.exchange_" + i + ".link")}</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="row">
      {exchanges}
    </div>
  )
}

export default Exchanges;
