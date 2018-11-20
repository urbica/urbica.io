import React from 'react';
import Container from './Container';

import Title from '../Title';
import LinkWithArrow from '../LinkWithArrow';

export default () => (
  <Container>
    <Title>Let’s get in touch</Title>
    <LinkWithArrow to="/contacts">Work with us</LinkWithArrow>
  </Container>
);
