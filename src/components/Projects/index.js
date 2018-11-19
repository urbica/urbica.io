import React from 'react';
import GetInTouchBlock from '../GetInTouchBlock';
import Wrap from '../Wrap';
import Title from '../Title';

import Container from './Container';
import Content from './Content';
import Block from './Block';

import projects from '../../configs/projects';
import technologies from '../../configs/technologies';

export default () => (
  <Container>
    <Wrap style={{ paddingTop: 30 }} disableBorder>
      <Title>
        Selected projects
      </Title>
      <Content>
        {
          projects.map(item => (
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
    <Wrap style={{ paddingTop: 30 }}>
      <Title>
        OUR TECHNOLOGIES
      </Title>
      <Content>
        {
          technologies.map(item => (
            <Block
              title={item.title}
              description={item.description}
              img={item.img}
              url={item.url}
            />
          ))
        }
      </Content>
      <GetInTouchBlock />
    </Wrap>
  </Container>
);
