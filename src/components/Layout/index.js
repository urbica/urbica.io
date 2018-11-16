import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import 'normalize.css';

import Header from '../Header';
import Container from './Container';

const Layout = ({ title, children }) => (
  <Container>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    {children}
  </Container>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Urbica',
};

export default Layout;
