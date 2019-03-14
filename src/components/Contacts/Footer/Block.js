import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  line-height: 40px;
  font-size: 28px;
  flex-grow: 0;
  padding-right: 20px;

  color: #cccccc;
  opacity: 0.8;
  
  width: ${({ width }) => (width || 'auto')};
  
  @media (max-width: 1200px) {
    width: calc(50% - 30px);
    padding-bottom: 50px;
    flex-shrink: 0;
  }
  
  @media (max-width: 850px) {
    width: 100%;
    padding-bottom: 0;
    flex-shrink: 0;
    
    div {
      padding: 20px 0;
    }
  }
`;
