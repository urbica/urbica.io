import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import Navigation from './Navigation';
import NavigationLink from './NavigationLink';
import HeaderWrap from './HeaderWrap';
import urbica from '../../assets/svg/URBICA.svg';

export default () => (
  <Container>
    <HeaderWrap>
      <Link to="/">
        <img src={urbica} alt="Urbica" />
      </Link>
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
