import React from 'react';
import Container from './Container';
import Navigation from './Navigation';
import NavigationLink from './NavigationLink';
import HeaderWrap from './HeaderWrap';
import Logo from './Logo';

export default () => (
  <Container>
    <HeaderWrap>
      <Logo />
      <Navigation>
        <NavigationLink to="/projects">
          projects
        </NavigationLink>
        <NavigationLink to="/contacts">
          contacts
        </NavigationLink>
      </Navigation>
    </HeaderWrap>
  </Container>
);
