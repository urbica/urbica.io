import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Container from './Container';

import Title from '../Title';
import LinkWithArrow from '../LinkWithArrow';

const Footer = ({ intl }) => (
  <Container>
    <Title>{intl.messages.contacts.title}</Title>
    <LinkWithArrow to="/contacts">{intl.messages.contacts.link}</LinkWithArrow>
  </Container>
);

Footer.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Footer);
