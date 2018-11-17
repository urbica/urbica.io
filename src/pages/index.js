import React from 'react';
import Layout from '../components/Layout';
import FirstBlock from '../components/FirstBlock';
import AboutBlock from '../components/AboutBlock';
import WhatWeDoBlock from '../components/WhatWeDoBlock';
import WeAreTrusted from '../components/WeAreTrustedBlock';
import GetInTouchBlock from '../components/GetInTouchBlock';

export default () => (
  <Layout>
    <FirstBlock />
    <AboutBlock />
    <WhatWeDoBlock />
    <WeAreTrusted />
    <GetInTouchBlock />
  </Layout>
);
