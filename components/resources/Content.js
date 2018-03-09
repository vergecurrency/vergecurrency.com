import React from 'react';
import Sidebar from './Sidebar';

export default ({ children }) => (
  <div className="row">
    <Sidebar />
    <div className="col-sm-8 pt">
      {children}
    </div>
  </div>
);
