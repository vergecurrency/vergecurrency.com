import React from 'react';
import Sidebar from './Sidebar';

export default ({children}) => (
  <div className="row">
    <Sidebar />  
    <div className="col-sm-9 pt">
      {children}  
    </div>
  </div>
);
