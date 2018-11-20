import styled from 'styled-components';

const InputText = styled.textarea`
  width: 100%;
  height: 180px;
  color: #cccccc;
  background: transparent;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  outline: none;
  
  font-size: 20px;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 30px;
  
  resize: none;
  
  &::placeholder {
    color: #aaaaaa;
  }
`;

export default InputText;
