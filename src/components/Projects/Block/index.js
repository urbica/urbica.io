import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Text from './Text';
import Arrow from './Arrow';
import Thumb from './Thumb';
import Image from './Image';

const Block = (props) => {
  const {
    title,
    description,
    img,
    imgThumb,
    url,
  } = props;

  return (
    <Container img={img}>
      <Thumb imgThumb={imgThumb} />
      <Image img={img} />
      <Title to={url}>
        {title}
        <Arrow />
      </Title>
      <Text>{description}</Text>
    </Container>
  );
};

Block.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgThumb: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Block;
