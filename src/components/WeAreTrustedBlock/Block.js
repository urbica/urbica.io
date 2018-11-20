import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 25%;
  flex-shrink: 0;
  padding: 30px 0;
  align-items: center;
  
  @media (max-width: 1300px) {
    width: 33%;
  }
  
  @media (max-width: 850px) {
    width: 50%;
  }
`;

export default Container;
