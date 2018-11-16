import React from 'react';
import Header from './Header/index';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
