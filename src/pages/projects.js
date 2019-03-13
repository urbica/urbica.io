import React from 'react';
import PropTypes from 'prop-types';
import { withIntl } from '../i18n';

import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <Projects />
  </Layout>
);

ProjectsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withIntl(ProjectsPage);
