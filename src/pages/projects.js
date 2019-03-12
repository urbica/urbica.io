import React from 'react';
import { withIntl } from '../i18n';

import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = () => (
  <Layout>
    <Projects />
  </Layout>
);

export default withIntl(ProjectsPage);
