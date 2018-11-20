import React from 'react';
import { Link } from 'gatsby';

import Container from './Container';
import urbica from '../../../assets/svg/URBICA.svg';

export default () => (
  <Container>
    <Link to="/">
      <img src={urbica} alt="Urbica" />
    </Link>
  </Container>
);
