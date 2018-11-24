import styled from 'styled-components';
import Img from 'gatsby-image';

const Image = styled(Img)`
  display: block;
  padding-top: 100%;
  background-color: rgba(12,16,25,1);
  cursor: pointer;
  height: 0;
  transition: 0.3s;
`;

export default Image;
