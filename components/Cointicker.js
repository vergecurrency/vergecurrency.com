import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

const Cointicker = ({ usd, btc, eur }) => (
  <div>
    <h1>Cointicker:</h1>
    <ul>
      <li>$ {usd}</li>
      <li>BTC {btc}</li>
      <li>€ {eur}</li>
    </ul>
  </div>
)

Cointicker.getInitialProps = async function () {
  const res = await fetch('https://api.coinmarketcap.com/v1/ticker/verge/?convert=EUR')
  const data = await res.json()
  const dat = data[0];

  return {
    usd: dat.price_usd,
    btc: dat.price_btc,
    eur: dat.price_eur
  }
}

export default Cointicker;
