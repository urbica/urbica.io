import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  background: #171F2A;
  flex-shrink: 0;
  margin-bottom: 60px;
  
  @media (max-width: 1300px) {
    width: 50%;
  }
  
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export default Container;
