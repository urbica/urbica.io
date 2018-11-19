import React from 'react';
import GetInTouchBlock from '../GetInTouchBlock';
import Wrap from '../Wrap';
import Title from '../Title';

import Container from './Container';
import Content from './Content';
import Block from './Block';

export default () => (
  <Container>
    <Wrap style={{ paddingTop: 30 }} disableBorder>
      <Title>
        Selected projects
      </Title>
      <Content>
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </Content>
      <GetInTouchBlock />
    </Wrap>
  </Container>
);
