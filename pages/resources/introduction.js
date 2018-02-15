import Link from 'next/link';

import Layout from '../../components/Layout';
import Sidebar from '../../components/resources/Sidebar';
import Content from '../../components/resources/Content';

export default () => (
  <Layout>
    <div className="learnmore pt-lg">
      <div className="container">
        <Content>
          <div className="introduction">
            <h1>This is the introduction</h1>
          </div>
        </Content>
      </div>
    </div>
  </Layout>
)
