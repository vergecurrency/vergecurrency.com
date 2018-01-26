import fetch from 'isomorphic-unfetch';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import ServerProps from '../components/ServerProps';

const Blog = ({ items, store }) => (
  <Layout loading={ store && store.showLoader }>
    <h1>VergeCurrency Blog</h1>
      <ul>{
        items.map((item, index) => (
          <li key={`${index}`}>
            <Link as={`${item.link}`} href={`${item.title}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))
    }</ul>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fverge-currency-xvg')
  const data = await res.json()
  const dataID = []

  const dataIDpush = (dat) => {
    for (let id = 0; id < dat.length; id++){
      let guid = dat[id].guid.substr(dat[id].guid.lastIndexOf('/') + 1)
      dataID.push(guid)
    }
  }

  dataIDpush(data.items);

  return {
    items: data.items,
    guid: dataID
  }
}

export default ServerProps(Blog)
