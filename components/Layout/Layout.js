import Head from 'next/head'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="static/bootstrap-reboot.css" type="text/css" />
      <link rel="stylesheet" href="static/responsive-display.css" type="text/css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
    </Head>

    <Header />

    <div className="container">
      {props.children}
    </div>

    <Footer />

    <style jsx>{`
      div:not(.container) {
        display: flex
        flex-direction: column
        min-height: 100vh
      }

      .container {
        flex-grow: 1
      }
    `}</style>
  </div>
);

export default Layout;
