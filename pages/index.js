import fetch from 'isomorphic-unfetch';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <div className="ribbon">
      <div className="ribbon-img"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            <div className="ribbon-txt">
              <h1>
                Privacy as a choice.
                A secure and anonymous
                cryptocurrency.
              </h1>
              <p>Built with focus on privacy.</p>
              <a href="btn btn-primary">Download OSX Wallet</a>
              <a href="btn btn-secondary">Watch video</a>
            </div>  
          </div>
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

      .ribbon {
        position: relative;
        min-height: 930px;
        color: #fff;
      }
      .ribbon-img {
        background-size: cover;
        position: absolute;
        min-width: 100%;
        min-height: 930px;
        z-index: -100;
        background: url('/static/img/home-hero-bg.jpg') no-repeat center center;
      }
      .ribbon-txt {
        margin-top:180px;
      }
    `}</style>
  </Layout>
);

export default Index
