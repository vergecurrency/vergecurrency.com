import Link from 'next/link';
import Layout from '../../components/Layout';
import Sidebar from '../../components/resources/Sidebar';
import Content from '../../components/resources/Content';

export default () => (
  <Layout>
    <div className="learnmore pt-large">
      <div className="container">
        <Content>
          <div className="getting-started">
            <h1>Getting started</h1>
          </div>
        </Content>
      </div>
    </div>
  </Layout>
)
