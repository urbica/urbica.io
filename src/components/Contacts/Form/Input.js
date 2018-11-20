import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 60px;
  color: #cccccc;
  background: transparent;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  outline: none;
  
  font-size: 20px;
  padding-left: 20px;
  margin-bottom: 30px;
  
  &::placeholder {
    color: #aaaaaa;
  }
`;

export default Input;
