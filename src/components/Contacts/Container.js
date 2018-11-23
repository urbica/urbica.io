import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 110px 30px 0;
  background: #171F2A;
  color: #cccccc;

  box-sizing: border-box;
  
  @media (max-width: 850px) {
    padding-top: 230px;
  }
`;

export default Container;
