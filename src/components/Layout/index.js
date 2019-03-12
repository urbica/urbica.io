import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import 'normalize.css';

import Header from '../Header';
import Container from './Container';
import GlobalStyles from '../GlobalStyles';
import ErrorBoundary from '../ErrorBoundary';

const Layout = ({ children, intl }) => (
  <ErrorBoundary>
    <Container>
      <GlobalStyles />
      <Helmet>
        <title>{intl.formatMessage({ id: 'title' })}</title>
      </Helmet>
      <Header />
      {children}
    </Container>
  </ErrorBoundary>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Layout);
