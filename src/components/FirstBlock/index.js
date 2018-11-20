import React from 'react';

import Container from './Container';
import Arrow from './Arrow';
import Wrap from '../Wrap';
import Title from '../BigTitle';

export default () => (
  <Container>
    <Wrap disableBorder style={{ paddingTop: 60 }}>
      <Title>
        We design rich data tools and applications that help our customers to leverage data getting powerful insights
        and make better decisions.
      </Title>
      <Arrow offset="80" href="#whatWeDo" />
    </Wrap>
  </Container>
);
