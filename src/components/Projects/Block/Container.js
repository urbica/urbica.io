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

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
    transition: background-color 0.3s;
    background-color: rgba(12,16,25,1);
    background-image: url(${({ img }) => img});
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-size: cover;
    cursor: pointer;
  }
  
  > div:first-child {
      // arrow animation
    > div {
      transition: transform 0.5s;
    }
  }

  &:hover {
    :before {
      background-color: rgba(255,255,255,0);
    }
    
    > div:first-child {
      // arrow animation
      > div {
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
