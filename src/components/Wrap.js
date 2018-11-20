import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: calc(100vw - 60px);
  min-height: ${({ disableMinHeight }) => (!disableMinHeight ? 'calc(100vh - 80px)' : 'inherit')};
  border-top: ${({ disableBorder }) => (disableBorder ? '0' : '1px')} solid #CCCCCC;
  box-sizing: border-box;
  padding: 50px 0;
  
  @media (max-width: 850px) {
    min-height: ${({ disableMinHeight }) => (!disableMinHeight ? 'calc(100vh - 170px)' : 'inherit')};
  }
`;

export default Wrap;
