import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import Container from './Container';
import Wrap from '../Wrap';
import Title from '../Title';
import Content from './Content';
import Block from './Block';
import data from '../../configs/whatWeDo';

const WhatWeDo = ({ intl }) => (
  <Container id="whatWeDo">
    <Wrap
      disableTopBorder
      disableMinHeight
    >
      <div>
        <Title>
          {intl.messages.whatWeDo.title}
        </Title>
        <Content>
          {
            data.map(({ title, text }) => (
              <Block
                key={title}
                title={intl.messages.whatWeDo[title]}
                text={intl.messages.whatWeDo[text]}
              />
            ))
          }
        </Content>
      </div>
    </Wrap>
  </Container>
);

WhatWeDo.propTypes = {
  intl: PropTypes.object.isRequired,
};


export default injectIntl(WhatWeDo);
