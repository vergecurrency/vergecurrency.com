import React from 'react';
import Sidebar from './Sidebar';

export default ({ children }) => (
  <div className="row center-xs">
    <div className="col-xs-11 col-sm-3 start-xs pt-xs">
      <Sidebar />
    </div>
    <div className="col-xs-11 col-sm-8 start-xs">
      <div className="learnmore__content pt-small pb-small">
        {children}
      </div>
    </div>
  </div>
);
