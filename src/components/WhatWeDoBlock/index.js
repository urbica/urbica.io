import React from 'react';
import Container from './Container';
import Wrap from '../Wrap';
import Title from '../Title';
import Content from './Content';
import Block from './Block';
import data from '../../configs/whatWeDo';

export default () => (
  <Container>
    <Wrap disableTopBorder>
      <div>
        <Title>
          What we do
        </Title>
        <Content>
          {
            data.map(({ title, text }) => (
              <Block key={title} title={title} text={text} />
            ))
          }
        </Content>
      </div>
    </Wrap>
  </Container>
);
