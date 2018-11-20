import React from 'react';
import { withPrefix } from 'gatsby';
import ProgressiveImage from 'react-progressive-image';
import PropTypes from 'prop-types';

import Container from './Container';
import Title from './Title';
import Text from './Text';
import Arrow from './Arrow';
import getThumbUrl from '../../../utils/getThumbUrl';

const Block = (props) => {
  const {
    title,
    description,
    img,
    url,
  } = props;

  return (
    <ProgressiveImage
      src={withPrefix(img)}
      placeholder={withPrefix(getThumbUrl(img))}
    >
      {(src, loading) => (
        <Container
          href={url}
          img={src}
          loading={loading}
          target="_blank"
        >
          <Title>
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
  url: PropTypes.string.isRequired,
};

export default Block;
