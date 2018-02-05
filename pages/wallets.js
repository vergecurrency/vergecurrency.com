import Layout from '../components/Layout';
import Link from 'next/link';

const Wallets = () => (
  <Layout>
    <h1>yes yall</h1>
    <p>This is the about page</p>
    <Link href="/"><a className="btn btn-primary">Home</a></Link>
  </Layout>
)

export default Wallets;
