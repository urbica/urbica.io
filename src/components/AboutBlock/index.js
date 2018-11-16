import React from 'react';
import Container from './Container';
import Wrap from '../Wrap';
import Title from '../Title';
import Text from '../Text';
import LinkWithArrow from '../LinkWithArrow';

export default () => (
  <Container>
    <Wrap>
      <Title>
        We care about your business
      </Title>
      <Text>
        We design rich data tools and applications that help our customers toleverage data getting powerful insights
        and make better decisions.
      </Text>
      <LinkWithArrow to="/projects">
        View projects
      </LinkWithArrow>
    </Wrap>
  </Container>
);
