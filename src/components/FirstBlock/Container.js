import styled from 'styled-components';
import background from '../../assets/images/map.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-size: cover;
  
  justify-content: center;
  align-items: center;
`;

export default Container;
