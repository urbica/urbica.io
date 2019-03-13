import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Title from '../Title';
import Content from './Content';
import Block from './Block';
import EmptyBlock from './EmptyBlock';

import Wrap from '../Wrap';
import Footer from '../Footer';

const Section = (props) => {
  const {
    title,
    content,
    disableBorder,
    footer,
    intl,
  } = props;

  return (
    <Wrap
      style={{ paddingTop: 30 }}
      disableBorder={disableBorder}
    >
      <Title>{title}</Title>
      <Content>
        {
          content.map((item) => {
            if (item) {
              return (
                <Block
                  key={item.title}
                  title={intl.messages.projects[item.title]}
                  description={intl.messages.projects[item.description]}
                  img={item.img}
                  url={item.url}
                />
              );
            }

            return <EmptyBlock key="empty" />;
          })
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
  intl: PropTypes.object.isRequired,
};

Section.defaultProps = {
  disableBorder: false,
  footer: false,
};

export default injectIntl(Section);
