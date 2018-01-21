import Layout from '../components/Layout';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';

const Index = (props) => (
  <Layout>
    <h1>VergeCurrency Blog</h1>
    <ul>
      {props.items.map(item => (
        <li key={item}>
          <Link as={`${item.link}`} href={`${item.title}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Avenir Next", Arial, sans-serif;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
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

export default Index
