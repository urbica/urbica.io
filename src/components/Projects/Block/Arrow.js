import styled from 'styled-components';
import arrow from '../../../assets/svg/Arrow_to_bottom.svg';

const Container = styled.div`
  display: block;
  height: 25px;
  width: 25px;
  margin: 0 10px 3px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
  transform: rotate(-90deg);
`;

export default Container;
