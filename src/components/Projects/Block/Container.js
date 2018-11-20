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
    filter: blur(${({ loading }) => (loading ? '4px' : '0px')});
    background-blend-mode: luminosity;
    background-size: cover;
    cursor: pointer;
    opacity: ${({ loading }) => (!loading ? 1 : 0.5)};
  }

  &:hover {
    :before {
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
