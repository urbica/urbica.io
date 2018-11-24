import styled from 'styled-components';

const Container = styled.a`
  display: block;
  position: relative;
  width: calc(33% - 15px);
  height: auto;
  margin-bottom: 30px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  
  div:first-child {
    transition: filter 0.3s;
    filter: saturate(0%);
  }
  
  div:nth-child(2) {
      // arrow animation
    div {
      transition: transform 0.5s;
    }
  }

  &:hover {
    div:first-child {
      filter: saturate(100%);
    }
    
    div:nth-child(2) {
      // arrow animation
      div {
        transform: rotate(-90deg) translateY(10px);
      }
    }
  }
  
  @media (max-width: 1100px) {
    width: calc(50% - 15px);
  }
  
  @media (max-width: 850px) {
    width: 100%;
    :before {
      background-blend-mode: normal;
    }
  }
`;

export default Container;
