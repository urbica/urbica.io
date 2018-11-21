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
        <NavigationLink
          to="/projects"
          activeStyle={{ borderBottom: '3px solid #ccc' }}
        >
          projects
        </NavigationLink>
        <NavigationLink
          to="/contacts"
          activeStyle={{ borderBottom: '3px solid #ccc' }}
        >
          contacts
        </NavigationLink>
      </Navigation>
    </HeaderWrap>
  </Container>
);
