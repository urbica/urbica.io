import styled from 'styled-components';

const Container = styled.div`
  width: calc(33% - 15px);
  height: auto;
  margin-bottom: 30px;

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
    background: gray;
    cursor: pointer;
  }
`;

export default Container;
