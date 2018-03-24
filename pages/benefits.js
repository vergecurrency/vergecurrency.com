import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function Benefits(props) {
  const { t } = props;
  return (
    <Layout>
      <div className="benefits">
        <div className="themed-container">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10">
                <div className="start-xs">
                  <h1>Benefits</h1>
                  <h2>Why You Should Accept Verge Payments.</h2>
                  <p>
                    Verge Currency is fast, flexible, entirely private and totally anonymous, but most importantly it's a currency built with the idea of supporting widespread mass adoption as it scales out across the globe. Every week more and more people, companies and organizations discover the benefits and advantages of accepting Verge as a method of transaction.
                  </p>
                  <p>
                    Verge ($XVG) makes it possible to engage in direct low cost transactions - quickly, efficiently and privately, providing businesses and individuals with options for sending and receiving payments however they choose and for whatever they would like, instantly. With the flip of a switch, we offer helpful integrations and tools that enable every user to make any large or small scale payment transaction; publicly, privately and/or anonymously.
                  </p>
                  <p>
                    Verge Currency empowers the people by giving them a choice and control on how to handle their personal privacy. One of the most critical aspects of a strong and practical currency, is liquidity - Verge is one of the most liquid tradable assets available on the large exchange marketplace.
                  </p>
                  <h2>A Few of the Benefits:</h2>
                  <h3>1. Eliminate chargeback fraud</h3>
                  <p>
                    A Verge transaction is immutable. Once a client has paid for a product or service, the money is in your wallet. Unlike credit card payments, charges cannot be reversed.
                  </p>
                  <h3>2. Transaction speed and immediate availability</h3>
                  <p>
                    There is no third party-dependent waiting period, like with bank-owned payments. Depending on the load of the network, transaction time varies between 5 and 10 seconds. Once payment is successful, the transaction amount is in your wallet and accessible immediately. You can convert Verge Currency ($XVG) into fiat at the end of each transaction, at the end of each working day or according to a custom set schedule.
                  </p>
                  <h3>3. Lower transaction costs</h3>
                  <p>
                    Credit card payments usually end up costing you somewhere between a 2% and 4% charge fee. When transacting with $XVG, this amount is only 0.1 $XVG which generally translates to over a 90% savings on your transaction costs. As a merchant with either high ticket items or purchase volume, this dramatically decreases an over-inflated expense that was once necessary. Verge solves this.
                  </p>
                  <h3>4. Wraith Protocol</h3>
                  <p>
                    Through this innovative new system, users who value transparency and accountability, e.g. merchants, have the option to have transactions viewable on the blockchain. On the other hand, it also provides an option to those who prefer transactions to vanish entirely. Wraith Protocol allows for complete anonymity to be maintained while providing a safe and secure method of sending and receiving Verge coins without transactions being traceable on a publicly accessible ledger.
                  </p>
                  <h3>5. Attract new customers</h3>
                  <p>
                    As $XVG rises in popularity, more users seek out participating businesses specifically to transact with them over the competition. This can mean exposure to clientele you didn't have before.
                  </p>
                  <h3>6. Garner publicity</h3>
                  <p>
                    Cryptocurrency makes the news in a way fiat currency can't. Local, national and even international news outlets are reporting on businesses taking crypto payments, giving you an opportunity for free publicity.
                  </p>
                  <h3>7. Buy into an inevitable business practice</h3>
                  <p>
                    Given the steady rise of cryptocurrency, there is no indication that it will cease being in circulation. In the future, accepting Verge ($XVG) as payment will be a standard procedure as well as an increase in individual Verge ($XVG) value, providing you with additional opportunity to increase profits even further.
                  </p>
                  <h3>8. Gain experience with blockchain technology</h3>
                  <p>
                    Blockchain is the future. Verge ($XVG) is an easy, accessible way to introduce yourself and your business to its workings. This could lead to further technical exploration at a later stage once you've gained confidence working with the technology and have identified a need for blockchain tech in your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'benefits'], { i18n, wait: process.browser })(Benefits);

export default Extended;
