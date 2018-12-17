import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import 'normalize.css';

import Header from '../Header';
import Container from './Container';
import GlobalStyles from '../GlobalStyles';
import ErrorBoundary from '../ErrorBoundary';

const Layout = ({ title, children }) => (
  <ErrorBoundary>
    <Container>
      <GlobalStyles />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
    </Container>
  </ErrorBoundary>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  title: 'Urbica',
};

export default Layout;
