import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 25%;
  flex-shrink: 0;
  padding: 30px 0 90px;
  align-items: center;
  
  img {
    height: 45px;
  }
  
  @media (max-width: 850px) {
    width: 50%;
  }
`;

export default Container;
