import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;  
  align-items: center;
  background: rgb(23, 31, 42);

  z-index: 1;
  
  div {
     display: flex;
  }
`;

export default Container;
