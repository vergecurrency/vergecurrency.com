import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

function FAQPrivacy() {
  return (
    <Layout>
      <Head>
        <title key="title">Privacy - VergeCurrency.com</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="faq">
              <p>we do not collect your data</p>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

export default FAQPrivacy;
