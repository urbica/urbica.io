import styled from 'styled-components';

const Container = styled.div`
  padding-left: 2px;
  padding-bottom: 10px;
  transition: opacity 0.3s;

  @media (min-width: 850px) {
    padding-bottom: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default Container;
