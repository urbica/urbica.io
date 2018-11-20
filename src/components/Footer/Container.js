import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  border: 1px solid #CCCCCC;  
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #CCCCCC;
  
  &:hover {
    background: #CCCCCC;
    div, a {
      color: #171F2A;
    }
  }
`;

export default Container;
