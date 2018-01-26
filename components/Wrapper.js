import React from 'react';
import Preloader from './Preloader';

const Wrapper = (Page) => {
  return class extends React.Component {
      static getInitialProps({ query: { store }}) {
        return { store };
      }
    
      loader () {
        return (<Preloader />);
      }
    
      layout () {
        return <Page {...this.props}/>
      }
    
      render() {
        const { showLoader } = this.props.store;
        return showLoader ? this.loader() : this.layout();
      }

  }
}

export default Wrapper;