import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Container from './Container';
import Navigation from './Navigation';
import NavigationLink from './NavigationLink';
import NavigationSimpleLink from './NavigationSimpleLink';
import Language from './Language';
import HeaderWrap from './HeaderWrap';
import Logo from './Logo';

const Header = ({ intl }) => (
  <Container>
    <HeaderWrap>
      <Logo />
      <Navigation>
        <NavigationLink
          to="/projects"
          activeStyle={{ borderBottom: '3px solid #ccc' }}
        >
          {intl.messages.header.projects}
        </NavigationLink>
        <NavigationLink
          to="/contacts"
          activeStyle={{ borderBottom: '3px solid #ccc' }}
        >
          {intl.messages.header.contacts}
        </NavigationLink>
        <NavigationSimpleLink
          href="https://medium.com/@Urbica.co"
          target="_blank"
          activeStyle={{ borderBottom: '3px solid #ccc' }}
        >
          {intl.messages.header.blog}
        </NavigationSimpleLink>
        <Language to={intl.locale === 'en' ? '/ru' : '/en'}>
          {intl.messages.header.language}
        </Language>
      </Navigation>
    </HeaderWrap>
  </Container>
);

Header.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Header);
