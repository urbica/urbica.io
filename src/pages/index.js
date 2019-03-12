import React from 'react';
import { withIntl } from '../i18n';

import Layout from '../components/Layout';
import FirstBlock from '../components/FirstBlock';
import WhatWeDoBlock from '../components/WhatWeDoBlock';
import WeAreTrusted from '../components/WeAreTrustedBlock';

const IndexPage = () => (
  <Layout>
    <FirstBlock />
    <WhatWeDoBlock />
    <WeAreTrusted />
  </Layout>
);


export default withIntl(IndexPage);
