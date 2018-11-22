import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import arrow from '../../assets/svg/Arrow_to_bottom.svg';

const Arrow = styled(AnchorLink)`
  position: absolute;
  content: '';
  left: -5px;
  bottom: 30px;
  width: 30px;
  height: 30px;
  background: url(${arrow}) no-repeat center;
  background-size: contain;
  box-sizing: border-box;
  cursor: pointer;
  
  @keyframes jump {
    from {bottom: 40px;}
    50% {bottom: 30px;}
    to {bottom: 40px;}
  }
  
  @keyframes jumpmobile {
    from {bottom: 130px;}
    50% {bottom: 120px;}
    to {bottom: 130px;}
  }
  
  animation: jump 1s infinite ease-in-out;
  
  @media (max-width: 850px) {
    bottom: 120px;
    animation: jumpmobile 1s infinite ease-in-out;
  }
  
  @media (min-width: 850px) {
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default Arrow;
