import styled from 'styled-components';

const Container = styled.div`
  width: 66%;
  padding-top: 70px;
  
  @media (max-width: 1200px) {
    width: 100%;
    padding-top: 0;
    padding-bottom: 50px;
  }
`;

export default Container;
