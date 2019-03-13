import styled from 'styled-components';
import { Link } from '../../../i18n';

const Container = styled(Link)`
  padding-top: 20px;
  padding-bottom: 30px;
  transition: opacity 0.3s;
  font-size: 30px;
  letter-spacing: 3px;
  line-height: 33px;
  text-transform: uppercase;
  text-decoration: none;
  color: #E4E4E4;

  @media (min-width: 850px) {
    padding-top: 0;
    padding-bottom: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default Container;
