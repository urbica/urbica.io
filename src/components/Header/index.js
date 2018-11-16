import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';

export default () => (
  <Container>
    <Link to="/">
      Logo
    </Link>
    <Link to="/blog">
      blog
    </Link>
    <Link to="/projects">
      projects
    </Link>
  </Container>
);
