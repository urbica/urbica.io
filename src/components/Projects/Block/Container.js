import styled from 'styled-components';

const Container = styled.div`
  width: calc(33% - 15px);
  height: auto;
  margin-bottom: 30px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
    background: rgba(0,0,0,1) url(${({ img }) => img}) no-repeat center;
    background-blend-mode: luminosity;
    background-size: cover;
    cursor: pointer;
    
    transition: background-color 0.3s;
  }
  
  &:hover {
    :before {
      background-color: rgba(255,255,255,0);
    }
  }
`;

export default Container;
