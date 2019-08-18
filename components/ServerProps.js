import React from 'react';

import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  class ServerProps extends React.Component {
    static async getInitialProps({ query: { store } }) {
      return { store };
    }

    getChildContext() {
      return { store: this.props.store };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  ServerProps.childContextTypes = {
    store: PropTypes.object,
  };

  return ServerProps;
};
