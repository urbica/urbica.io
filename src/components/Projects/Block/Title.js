import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled(Link)`
  display: flex;
  position: relative;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  padding-top: 25px;
  text-decoration: none;
  
  align-items: center;
  
  color: #cccccc;
  
  cursor: pointer;
  
  &:hover {
    opacity: 0.5;
  }
`;

export default Container;
