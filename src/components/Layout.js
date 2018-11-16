import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

const Layout = ({ title = 'Urbica', children }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    {children}
  </>
);

export default Layout;
