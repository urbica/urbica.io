import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = ({ data }) => (
  <Layout>
    <Projects
      projects={data.allProjectsJson.edges}
      technologies={data.allTechnologiesJson.edges}
    />
  </Layout>
);

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProjectsPage;

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id,
          title
          description,
          url,
          img {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    },
    allTechnologiesJson {
      edges {
        node {
          id,
          title
          description,
          url,
          img {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
