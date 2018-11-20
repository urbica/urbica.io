import React from 'react';
import Container from './Container';

import Title from '../Title';
import LinkWithArrow from '../LinkWithArrow';

export default () => (
  <Container to="/">
    <Title>Let’s get in touch</Title>
    <LinkWithArrow to="/" as="div">Work with us</LinkWithArrow>
  </Container>
);
