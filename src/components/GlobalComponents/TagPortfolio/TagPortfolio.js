import styled from 'styled-components';

const TagPortfolio = styled.p`
  font-size: ${({ theme }) => theme.font.size.smallParagraph.primary};
  font-family: ${({ theme }) => theme.font.family.roboto};
  color: ${({ theme }) => theme.color01};
  font-weight: 700;
  padding: 0 8px;
  text-transform: uppercase;
  display: inline-block;
  ${props => (props.isLast ? 'padding-right:0' : '')};
  ${props => (props.isFirst ? 'padding-left:0' : '')};
  line-height: 1.6;
  ${({ theme }) => theme.media.tablet} {
    line-height: 2.572;
    font-size: ${({ theme }) => theme.font.size.smallParagraph.tablet};
  }
`;
export default TagPortfolio;
