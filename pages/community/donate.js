import Link from 'next/link';
import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

export default () => (
  <Layout>
    <div className="learnmore">
      <div className="container">
        <Content>
          <div className="rubygems">
            <h1>Donate to Support Development</h1>
            <h3>
              Verge Community,
            </h3>
            <p>
              We are excited to announce a brand new crowd funding initiative in order to help progress forward in the crypto space. It has come to our attention over the past couple months that there has been an increased demand for several things:
            </p>
            <ul>
              <li><strong>Ledger Nano hardware</strong> wallet integration and support</li>
              <li>Wraith protocol <strong>iOS enabled wallet</strong> applications</li>
              <li>Advanced Marketing tactics which <strong>span the globe</strong></li>
              <li><strong>Partnerships with large scale companies</strong></li>
              <li><strong>Real world adoption</strong></li>
            </ul>
            <p>At Verge we are always striving to achieve new heights and deliver products or software implementations that are requested by the community. Listening to our community members and taking in feedback is not only one of the core founding principles of Verge, but it is inherent in our open-source nature. Verge is continuously looking to grow and improve to ensure you, the user of our product, are getting the best possible experience you can.</p>
            <p>As many of you are aware, no one on the Verge staff is paid to do the work they do and generally any marketing efforts that come from our team are funded out of our own day job salaries. That is why we need your help. In order for us to be able to provide these services to you, our community, we need to raise a substantial amount of funding.</p>
            <h3>Verge has some exciting news today!</h3> 
            <p>
              In line with our mission to empower people to bring blockchain transactions into everyday life, we are thrilled to announce efforts to establish the largest cryptocurrency collaboration to hit the market.  A global organization with a vast network of high traffic sites is looking to enter the cryptocurrency market and form a strategic business alliance with Verge as the preferred form of secure payment method, offering a quick and private means of transaction to hundreds of millions of potential consumers daily. This partnership represents an enormous potential market with a global reach that will  compete with multiple fiat currencies.
              We are eager to see this partnership materialize and invite everyone in the Verge community to support this groundbreaking  initiative. Help us accelerate this crowdfunding effort and reach our target by donating coins today.
            </p>
            <p>Below you will find a donation address, anything you can contribute is greatly appreciated.</p>

            <h3>Verge Verge Wallet Address</h3>
            <p>
              <Link href="https://verge-blockchain.info/address/DLv25ww5CipJngsKMYemBTBWH14CUpucxX">
                <a rel="noopener noreferrer" href="https://verge-blockchain.info/address/DLv25ww5CipJngsKMYemBTBWH14CUpucxX" target="_blank">
                  DLv25ww5CipJngsKMYemBTBWH14CUpucxX
                </a>
              </Link>
            </p>
          </div>
        </Content>
      </div>
    </div>
  </Layout>
);
