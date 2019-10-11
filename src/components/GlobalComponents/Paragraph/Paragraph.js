import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.roboto};
  color: ${({ theme }) => theme.color02};
  font-weight: 300;
  line-height: 1.667;
  padding: 10px 0;
  letter-spacing: -0.4px;
  font-size: ${({ theme }) => theme.font.size.paragraph.primary};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.font.size.paragraph.desktop};
  }
`;
export default Paragraph;
