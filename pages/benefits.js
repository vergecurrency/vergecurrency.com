import Head from 'next/head';

import { translate } from 'react-i18next';
import Layout from '../components/Layout';

import i18n from '../i18n';

function Benefits(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.benefits.title', { defaultValue: 'Benefits - VergeCurrency.com' })}</title>
      </Head>
      <div className="benefits">
        <div className="themed-container">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10">
                <div className="start-xs">
                  <h1>{t('benefits:body.title', { defaultValue: 'Benefits' })}</h1>
                  <h2>{t('benefits:body.title2', { defaultValue: 'Why You Should Accept Verge Payments.' })}</h2>
                  <p>
                    {t('benefits:body.whyverge1', { defaultValue: 'Verge is fast, flexible, entirely private and totally anonymous, but most importantly it\'s a currency built with the idea of supporting widespread mass adoption as it scales out across the globe. Every week more and more people, companies and organizations discover the benefits and advantages of accepting Verge as a method of transaction.' })}
                  </p>
                  <p>
                    {t('benefits:body.whyverge2', { defaultValue: 'Verge makes it possible to engage in direct low cost transactions - quickly, efficiently and securely, providing businesses and individuals with options for sending and receiving payments however they choose and for whatever they would like, instantly. With the flip of a switch, we offer helpful integrations and tools that enable every user to make any large or small scale payment transaction; publicly, securely and/or anonymously.' })}
                  </p>
                  <p>
                    {t('benefits:body.whyverge3', { defaultValue: 'Verge empowers the people by giving them a choice and control on how to handle their personal security. One of the most critical aspects of a strong and practical currency, is liquidity - Verge is one of the most liquid tradable assets available on the large exchange marketplace.' })}
                  </p>
                  <h2>{t('benefits:body.title3', { defaultValue: 'A Few of the Benefits:' })}</h2>
                  <h3>1. {t('benefits:body.benefit1', { defaultValue: 'Eliminate chargeback fraud' })}</h3>
                  <p>
                    {t('benefits:body.detail1', { defaultValue: 'A Verge transaction is immutable. Once a client has paid for a product or service, the money is in your wallet. Unlike credit card payments, charges cannot be reversed.' })}
                  </p>
                  <h3>2. {t('benefits:body.benefit2', { defaultValue: 'Transaction speed and immediate availability' })}</h3>
                  <p>
                    {t('benefits:body.detail2', { defaultValue: 'There is no third party-dependent waiting period, like with bank-owned payments. Depending on the load of the network, transaction time varies between 5 and 10 seconds. Once payment is successful, the transaction amount is in your wallet and accessible immediately. You can convert Verge Currency  into fiat at the end of each transaction, at the end of each working day or according to a custom set schedule.' })}
                  </p>
                  <h3>3. {t('benefits:body.benefit3', { defaultValue: 'Lower transaction costs' })}</h3>
                  <p>
                    {t('benefits:body.detail3', { defaultValue: 'Credit card payments usually end up costing you somewhere between a 2% and 4% charge fee. When transacting with Verge, this amount is only 0.1 Verge which generally translates to over a 90% savings on your transaction costs. As a merchant with either high ticket items or purchase volume, this dramatically decreases an over-inflated expense that was once necessary. Verge solves this.' })}
                  </p>
                  <h3>4. {t('benefits:body.benefit4', { defaultValue: 'Attract new customers' })}</h3>
                  <p>
                    {t('benefits:body.detail4', { defaultValue: 'As Verge rises in popularity, more users seek out participating businesses specifically to transact with them over the competition. This can mean exposure to clientele you didn\'t have before.' })}
                  </p>
                  <h3>5. {t('benefits:body.benefit5', { defaultValue: 'Garner publicity' })}</h3>
                  <p>
                    {t('benefits:body.detail5', { defaultValue: 'Cryptocurrency makes the news in a way fiat currency can\'t. Local, national and even international news outlets are reporting on businesses taking crypto payments, giving you an opportunity for free publicity.' })}
                  </p>
                  <h3>6. {t('benefits:body.benefit6', { defaultValue: 'Buy into an inevitable business practice' })}</h3>
                  <p>
                    {t('benefits:body.detail6', { defaultValue: 'Given the steady rise of cryptocurrency, there is no indication that it will cease being in circulation. In the future, accepting Verge as payment will be a standard procedure as well as an increase in individual Verge  value, providing you with additional opportunity to increase profits even further.' })}
                  </p>
                  <h3>7. {t('benefits:body.benefit7', { defaultValue: 'Gain experience with blockchain technology' })}</h3>
                  <p>
                    {t('benefits:body.detail7', { defaultValue: 'Blockchain is the future. Verge is an easy, accessible way to introduce yourself and your business to its workings. This could lead to further technical exploration at a later stage once you\'ve gained confidence working with the technology and have identified a need for blockchain tech in your business.' })}
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
