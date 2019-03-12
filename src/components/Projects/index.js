import React from 'react';
import { injectIntl } from 'react-intl';

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
      title="Our technologies"
      content={technologies}
      footer
    />
  </Container>
);

export default injectIntl(Projects);
