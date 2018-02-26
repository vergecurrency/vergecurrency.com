import Link from 'next/link';

import Layout from '../components/Layout';
import Vendors from '../components/Vendors';

function VendorsPage() {
  return (
    <Layout>
      <div className="vendors pt-lg">
        <div className="container">
          <div className="intro pt-lg pb-lg">
            <div className="row center-xs middle-xs">
              <div className="col-sm-6">
                <span className="spaced">Vendors using Verge</span>
                <h2>Vendors proudly accept Verge Currency as a method of payment for their services.</h2>
              </div>
            </div>
          </div>
          <Vendors />
          <div className="row pt">
            <div className="col-xs-12 col-sm-7 col-sm-offset-1">
              <h3>Are you interested in Verge Currency? Start accepting Verge today!</h3>
            </div>
            <div className="col-xs-12 col-sm-3 col-sm-offset-1">
              <Link href="/get-verge">
                <a href="/get-verge" className="btn btn-primary">Accept verge today</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default VendorsPage;
