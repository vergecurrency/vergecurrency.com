import Layout from '../components/Layout';
import ServerProps from '../components/ServerProps';

import Link from 'next/link';

const About = ({ store }) => (
  <Layout loading={ store && store.showLoader }>
    <h1>yes yall</h1>
    <p>This is the about page</p>
    <Link href="/"><a className="btn btn-primary">Home</a></Link>
  </Layout>
)

export default ServerProps(About);
