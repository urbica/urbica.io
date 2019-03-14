import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import Container from './Container';
import Section from './Section';

import projects from '../../configs/projects';
import technologies from '../../configs/technologies';

const Projects = ({ intl }) => (
  <Container>
    <Section
      title={intl.messages.projects.title}
      content={projects}
      disableBorder
    />
    <Section
      title={intl.messages.projects.titleTech}
      content={technologies}
      footer
    />
  </Container>
);

Projects.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Projects);
