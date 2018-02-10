import Link from 'next/link';

import Layout from '../components/Layout';

const Roadmap = () => (
  <Layout>
    <div className="roadmap">
      <h1>This will be the roadmap page</h1>
    </div>
    <Link href="/"><a className="btn btn-primary">Home</a></Link>
  </Layout>
)

export default Roadmap;
