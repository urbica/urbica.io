import React from 'react';
import Container from './Container';
import Navigation from './Navigation';
import NavigationLink from './NavigationLink';
import NavigationA from './NavigationA';
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
        <NavigationA
          href="https://medium.com/@Urbica.co"
          target="_blank"
          activeStyle={{ borderBottom: '3px solid #ccc' }}
        >
          BLOG
        </NavigationA>
      </Navigation>
    </HeaderWrap>
  </Container>
);
