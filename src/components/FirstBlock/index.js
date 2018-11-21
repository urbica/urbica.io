import React from 'react';
import Media from 'react-media';

import Container from './Container';
import Arrow from './Arrow';
import Wrap from '../Wrap';
import Title from '../BigTitle';

export default () => (
  <Container>
    <Wrap disableBorder style={{ paddingTop: 60 }}>
      <Title>
        WE DESIGN DATA TOOLS FOR GETTING INSIGHTS AND MAKING DECISIONS
      </Title>
      <Media query={{ maxWidth: 850 }}>
        {
          matches => (matches ? (<Arrow offset="184" href="#whatWeDo" />)
            : (<Arrow offset="80" href="#whatWeDo" />))
        }
      </Media>
    </Wrap>
  </Container>
);
