import Layout from '../components/Layout';
import Link from 'next/link';

import Wrapper from '../components/Wrapper';

export default () => Wrapper(
  <Layout>
    <h1>yes yall</h1>
    <p>This is the about page</p>
    <Link href="/"><a className="btn btn-primary">Home</a></Link>
  </Layout>
);