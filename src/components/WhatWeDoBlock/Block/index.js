import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Title from './Title';
import Text from './Text';

const Block = ({ title, text }) => (
  <Container>
    <Title>
      {title}
    </Title>
    <Text>
      {text}
    </Text>
  </Container>
);

Block.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Block;
