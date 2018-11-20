import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #CCCCCC;
  
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    height: auto;
  }
`;

export default Wrap;
