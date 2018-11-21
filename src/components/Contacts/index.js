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
          Fill the form or contact us on
        </Text>
        <Link href="mailto:hello@urbica.co">hello@urbica.co</Link>
      </Content>
      <Form />
    </Main>
    <Footer />
  </Container>
);
