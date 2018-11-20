import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Content from './Content';
import Block from './Block';
import Wrap from '../Wrap';
import Footer from '../Footer';

const Section = (props) => {
  const {
    title,
    content,
    disableBorder,
    footer,
  } = props;

  return (
    <Wrap
      style={{ paddingTop: 30 }}
      disableBorder={disableBorder}
    >
      <Title>{title}</Title>
      <Content>
        {
          content.map(item => (
            <Block
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              url={item.url}
            />
          ))
        }
      </Content>
      {footer && <Footer />}
    </Wrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  disableBorder: PropTypes.bool,
  footer: PropTypes.bool,
};

Section.defaultProps = {
  disableBorder: false,
  footer: false,
};

export default Section;
