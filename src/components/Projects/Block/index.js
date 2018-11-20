import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Text from './Text';
import Arrow from './Arrow';

const Block = (props) => {
  const {
    title,
    description,
    img,
    imgThumb,
    url,
  } = props;

  return (
    <ProgressiveImage src={img} placeholder={imgThumb}>
      {(src, loading) => (
        <Container img={src} loading={loading}>
          <Title to={url}>
            {title}
            <Arrow />
          </Title>
          <Text>{description}</Text>
        </Container>
      )}
    </ProgressiveImage>
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
