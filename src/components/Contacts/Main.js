import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 50px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export default Container;
