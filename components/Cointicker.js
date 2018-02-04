import fetch from 'isomorphic-unfetch';
import { translate } from 'react-i18next';
import i18n from '../i18n';

const Cointicker = ({test}) => {
  const res = fetch("https://api.coinmarketcap.com/v1/ticker/verge/");
  const json = JSON.parse(JSON.stringify(res));

  console.log(json);

  return (
    <div></div> 
  )

}

export default Cointicker;