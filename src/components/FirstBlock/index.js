import React from 'react';

import Container from './Container';
import Arrow from './Arrow';
import Wrap from '../Wrap';
import Title from '../Title';

export default () => (
  <Container>
    <Wrap disableBorder style={{ paddingTop: 60 }}>
      <Title>
        We design rich data tools and visualisations that help our
        customers leverage data for business insights and
        decision-making
      </Title>
      <Arrow offset="80" href="#whatWeDo" />
    </Wrap>
  </Container>
);
