import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Section from './Section';

const Projects = ({ projects, technologies }) => (
  <Container>
    <Section
      title="Selected projects"
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

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Projects;
