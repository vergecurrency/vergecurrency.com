import Link from 'next/link';

import Layout from '../components/Layout';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const Learnmore = () => (
  <Layout>
    <div className="learnmore pt-lg">
      <div className="container">
        <Tabs defaultTab="vertical-tab-one" vertical>
          <TabList>
            <Tab tabFor="vertical-tab-one">Introduction</Tab>
            <Tab tabFor="vertical-tab-two">Getting started</Tab>
            <Tab tabFor="vertical-tab-three">How to buy Verge</Tab>
          </TabList>
          <TabPanel tabId="vertical-tab-one">
            <p>Introduction</p>
          </TabPanel>
          <TabPanel tabId="vertical-tab-two">
            <p>Getting started</p>
          </TabPanel>
          <TabPanel tabId="vertical-tab-three">
            <p>How to buy Verge</p>
          </TabPanel>
        </Tabs>
      </div>  
    </div>
  </Layout>
)

export default Learnmore;
