import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: calc(33% - 15px);
  height: auto;
  margin-bottom: 30px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
    transition: background-color 0.3s;
  }

  &:hover {
    div {
      background-color: rgba(255,255,255,0);
    }
  }
  
  @media (max-width: 1100px) {
    width: calc(50% - 15px);
  }
  
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export default Container;
