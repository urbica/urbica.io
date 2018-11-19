import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import arrow from '../../assets/svg/Arrow_to_bottom.svg';

const Arrow = styled(AnchorLink)`
  position: absolute;
  content: '';
  left: -10px;
  bottom: 20px;
  width: 25px;
  height: 25px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
  box-sizing: border-box;
  cursor: pointer;
  
  &:hover {
    opacity: 0.5;
  }
`;

export default Arrow;
