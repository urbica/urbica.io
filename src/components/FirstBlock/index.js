import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Container from './Container';
import Arrow from './Arrow';
import Wrap from '../Wrap';
import BigTitle from '../BigTitle';

const FirstBlock = ({ intl }) => (
  <Container>
    <Wrap disableBorder style={{ paddingTop: 60 }}>
      <BigTitle locale={intl.locale}>
        {intl.messages.firstBlock.title}
      </BigTitle>
      <Media query={{ maxWidth: 850 }}>
        {
          matches => (matches ? (<Arrow offset="184" href="#whatWeDo" />)
            : (<Arrow offset="80" href="#whatWeDo" />))
        }
      </Media>
    </Wrap>
  </Container>
);

FirstBlock.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(FirstBlock);
