import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: calc(100% - 60px);
  min-height: calc(100vh - 80px);
  border-top: ${({ disableBorder }) => (disableBorder ? '0' : '1px')} solid #CCCCCC;
  box-sizing: border-box;
  padding: 50px 0;
`;

export default Wrap;
