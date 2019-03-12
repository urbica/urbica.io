import styled from 'styled-components';
import { Link } from 'gatsby';
import arrow from '../../assets/svg/Arrow_to_bottom.svg';

const Language = styled(Link)`
  position: relative;
  font-size: 30px;
  line-height: 71px;
  padding-top: 5px;
  padding-left: 40px;
  margin-left: 25px;
  text-decoration: none;
  border-bottom: 3px solid transparent;

  color: rgba(204, 204, 204, 1);
  
  transition: color 0.3s;
  
  &:hover {
    &:after {
      left: 5px;
    }
  }
  
  &:after {
    position: absolute;
    top: 15px;
    left: 0;
    width: 30px;
    height: 30px;
    content: '';
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${arrow});
    transform: rotate(-90deg);
    transition: 0.3s;
  }

  @media (min-width: 850px) {
    &:hover {
      color: rgba(204, 204, 204, 0.5);
    }
  }
  
  @media (max-width: 850px) {
    margin-left: 0;
    margin-right: 25px;
  }
`;

export default Language;
