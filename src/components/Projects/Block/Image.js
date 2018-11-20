import styled from 'styled-components';

const Thumb = styled.div`
  position: absolute;
  width: 100%;
  display: block;
  padding-top: 100%;
  top: 0;
  left: 0;
  background-color: rgba(12,16,25,0.9);
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: luminosity;
  background-size: cover;
  cursor: pointer;
  
  transition: background-color 0.3s;
`;

export default Thumb;
