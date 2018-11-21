import styled from 'styled-components';
import arrow from '../../assets/svg/Arrow.svg';

export default styled.a`
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  text-decoration-line: underline;

  color: #cccccc;
  
  transition: opacity 0.3s;
  
  &:after {
    position: absolute;
    content: '';
    right: -35px;
    top: 5px;
    width: 20px;
    height: 25px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }

  &:hover {
    opacity: 0.5;
  }
`;
