import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Content from './Content';
import Block from './Block';
import Wrap from '../Wrap';

const Section = ({ title, content, disableBorder }) => (
  <Wrap
    style={{ paddingTop: 30 }}
    disableBorder={disableBorder}
  >
    <Title>{title}</Title>
    <Content>
      {
        content.map(item => (
          <Block
            title={item.title}
            description={item.description}
            img={item.img}
            url={item.url}
          />
        ))
      }
    </Content>
  </Wrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  disableBorder: PropTypes.bool,
};

Section.defaultProps = {
  disableBorder: false,
};

export default Section;
