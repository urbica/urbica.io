import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 60px);
  min-height: calc(100vh - 180px);
  border-top: ${({ disableBorder }) => (disableBorder ? '0' : '1px')} solid #CCCCCC;
  padding: 50px 0;
`;

export default Wrap;
