import Header from '../Header/Header';

const layoutStyle = {
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div className="container" style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
