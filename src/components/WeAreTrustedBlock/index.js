import React from 'react';
import { withPrefix } from 'gatsby';
import { injectIntl } from 'react-intl';

import Title from '../Title';
import Wrap from '../Wrap';
import Container from './Container';
import Contanet from './Content';
import Block from './Block';

import Footer from '../Footer';

import images from '../../configs/weAreTrusted';

const WeAreTrusted = ({ intl }) => (
  <Container>
    <Wrap>
      <div>
        <Title>{intl.messages.weAreTrusted.title}</Title>
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

export default injectIntl(WeAreTrusted);
