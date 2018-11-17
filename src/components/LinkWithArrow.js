import styled from 'styled-components';
import { Link } from 'gatsby';
import arrow from '../assets/svg/Arrow.svg';

const LinkWithArrow = styled(Link)`
  position: relative;
  font-family: 'IBM Plex Mono', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  text-decoration-line: underline;

  color: #FFFFFF;
  
  transition: opacity 0.3s;
  
  &:after {
    position: absolute;
    content: '';
    right: -35px;
    top: 5px;
    width: 20px;
    height: 25px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export default LinkWithArrow;
