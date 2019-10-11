import React from 'react';

// import { Link } from 'gatsby';
import styled from 'styled-components';
import BlogTemplate from '../templates/BlogTemplate/BlogTemplate';
// import Paragraph from '../components/GlobalComponents/Paragraph/Paragraph';

// const HeadlinePage = styled(Paragraph)`
//   font-size: ${({ theme }) => theme.font.size.head.primary};
//   font-weight: 700;

//   ${({ theme }) => theme.media.tablet} {
//     font-size: ${({ theme }) => theme.font.size.head.tablet};
//   }
//   ${({ theme }) => theme.media.desktop} {
//     font-size: ${({ theme }) => theme.font.size.head.desktop};
//   }
// `;

const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 23.052332%);
  grid-template-rows: 21.783vw 67px 21.783vw;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media only screen and (min-width: 1600px) {
    grid-template-columns: repeat(4, 332px);
    grid-template-rows: 355px 83px 355px;
    grid-column-gap: 38px;
    grid-row-gap: 38px;
  }
`;
const Post = styled.div`
border-radius:25%;
  :nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;

    background: hsl(355, 100%, 10%);
  }
  :nth-child(2) {
    grid-area: 1 / 3 / 3 / 4;

    background: hsl(355, 100%, 20%);
  }
  :nth-child(3) {
    grid-area: 1 / 4 / 3 / 5;

    background: hsl(355, 100%, 30%);
  }
  :nth-child(4) {
    grid-area: 2 / 1 / 4 / 2;
    background: hsl(355, 100%, 40%);
  }
  :nth-child(5) {
    grid-area: 2 / 2 / 4 / 3;
    background: hsl(355, 100%, 50%);
  }
  :nth-child(6) {
    grid-area: 3 / 3 / 4 / 5;
    background: hsl(355, 100%, 60%);
  }
`;

const IndexPage = () => (
  <BlogTemplate>
    <ContainerFlex className="row">
      <Post>1</Post>
      <Post>2</Post>
      <Post>3</Post>
      <Post>4</Post>
      <Post>5</Post>
      <Post>6</Post>
      {/* <HeadlinePage as="h1">Menu</HeadlinePage> */}
      {/* <Link to="/hillwood/">hillwood</Link> */}
      {/* <Link to="/inkospor/">Inkospor</Link> */}
    </ContainerFlex>
  </BlogTemplate>
);

export default IndexPage;
