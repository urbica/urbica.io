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

  @media (min-width: 850px) {
    &:hover {
      opacity: 0.5;
    }
  }
  
  @media (max-width: 850px) {
    padding: 0;
    padding-right: 20px;
  }
`;

export default NavigationLink;
