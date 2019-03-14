import styled from 'styled-components';

const Text = styled.div`
  max-width: ${({ locale }) => (locale === 'ru' ? '450px' : '350px')};
  line-height: 40px;
  font-size: 28px;
  padding-right: 50px;

  color: #aaaaaa;
`;

export default Text;
