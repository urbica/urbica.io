import React from 'react';
import Container from './Container';
import Main from './Main';
import Content from './Content';
import Form from './Form';
import Title from './Title';
import Text from './Text';
import Link from './Link';
import Footer from './Footer';

export default () => (
  <Container>
    <Main>
      <Content>
        <Title>
          Let’s get in touch
        </Title>
        <Text>
          Fill the following form or tell us about your project on
        </Text>
        <Link href="/">hello@urbica.co</Link>
      </Content>
      <Form />
    </Main>
    <Footer />
  </Container>
);
