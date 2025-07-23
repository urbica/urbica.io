import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Container from './Container';
import Main from './Main';
import Content from './Content';
import Form from './Form';
import Title from './Title';
import Text from './Text';
import Link from './Link';
import Footer from './Footer';

const Contacts = ({ intl }) => (
  <Container>
    <Main>
      <Content>
        <Title>
          {intl.messages.contacts.title}
        </Title>
        <Text>
          {intl.messages.contacts.text}
        </Text>
        <Link href="mailto:hello@urbica.io">hello@urbica.io</Link>
      </Content>
      <Form />
    </Main>
    <Footer />
  </Container>
);

Contacts.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Contacts);
