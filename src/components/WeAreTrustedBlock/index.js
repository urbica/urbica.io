import React from 'react';
import { withPrefix } from 'gatsby';

import Title from '../Title';
import Wrap from '../Wrap';
import Container from './Container';
import Contanet from './Content';
import Block from './Block';

import Footer from '../Footer';

import images from '../../configs/weAreTrusted';

export default () => (
  <Container>
    <Wrap>
      <div>
        <Title>We are trusted</Title>
        <Contanet>
          {
            images.map(({ name, url }) => (
              <Block key={name}>
                <img src={withPrefix(url)} alt={name} />
              </Block>
            ))
          }
        </Contanet>
      </div>
      <Footer />
    </Wrap>
  </Container>
);
