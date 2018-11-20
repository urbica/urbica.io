import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
    
  width: 100%;
  padding-top: 80px;
  
  box-sizing: border-box;
  align-items: center;
  
  @media (max-width: 850px) {
    padding-top: 200px;
  }
`;

export default Container;
