import Layout from '../components/Layout/Layout';
import Head from 'next/head'

const Index = (props) => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="static/responsive-display.css" type="text/css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
    </Head>
  </Layout>
)

export default Index
