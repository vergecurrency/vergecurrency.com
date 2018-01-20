import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => (
  <div>
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
