import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Text from './Text';
import Arrow from './Arrow';
import Image from './Image';

const Block = ({ content }) => {
  const {
    title,
    description,
    img,
    url,
  } = content;

  return (
    <Container
      href={url}
      img={img}
      target="_blank"
    >
      <Image fluid={img.childImageSharp.fluid} />
      <Title>
        {title}
        <Arrow />
      </Title>
      <Text>{description}</Text>
    </Container>
  );
};

Block.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Block;
