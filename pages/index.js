import fetch from 'isomorphic-unfetch';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <div className="hero">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center">
            Privacy as a choice.
            A secure and anonymous
            cryptocurrency.
          </h1>
          <p>Built with focus on privacy.</p>
        </div>
      </div>
    </div>
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

      .hero {
        background: url('/static/img/home-hero-bg.jpg');
      }
    `}</style>
  </Layout>
);

export default Index
