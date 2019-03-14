import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Title from './Title';
import Text from './Text';

const Block = ({ title, text, locale }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Text locale={locale}>
      {text}
    </Text>
  </Container>
);

Block.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Block;
