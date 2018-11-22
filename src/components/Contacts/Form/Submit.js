import styled from 'styled-components';

const Container = styled.input`
  font-size: 30px;
  color: #cccccc;
  text-decoration: ${({ disable }) => (disable ? 'none' : 'underline')};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 850px) {
    display: block;
    width: 100%;
    text-align: left;
  }
`;

export default Container;
