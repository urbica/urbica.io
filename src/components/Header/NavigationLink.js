import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationLink = styled(Link)`
  line-height: normal;
  font-size: 30px;
  text-transform: uppercase;
  padding: 0 25px;
  text-decoration: none;

  color: #CCCCCC;
  
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export default NavigationLink;
