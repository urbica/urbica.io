import React from 'react';
import PropTypes from 'prop-types';

import { withIntl } from '../i18n';

import Layout from '../components/Layout';
import FirstBlock from '../components/FirstBlock';
import WhatWeDoBlock from '../components/WhatWeDoBlock';
import WeAreTrusted from '../components/WeAreTrustedBlock';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <FirstBlock />
    <WhatWeDoBlock />
    <WeAreTrusted />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withIntl(IndexPage);
