import React from 'react';
import Footer from '../Footer';

import Container from './Container';
import Section from './Section';

import projects from '../../configs/projects';
import technologies from '../../configs/technologies';

export default () => (
  <Container>
    <Section
      title="Selected projects"
      content={projects}
      disableBorder
    />
    <Section
      title="Our technologies"
      content={technologies}
    />
    <Footer />
  </Container>
);
