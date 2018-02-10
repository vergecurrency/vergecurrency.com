import Link from 'next/link';

import Layout from '../components/Layout';

const Wallets = () => (
  <Layout>
    <h1>yes yall</h1>
    <p>This is the about page</p>
    <Link href="/"><a className="btn btn-primary">Home</a></Link>
  </Layout>
)

export default Wallets;
