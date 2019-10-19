import React from 'react';

// import { Link } from 'gatsby';
import styled from 'styled-components';
import BlogTemplate from '../templates/BlogTemplate/BlogTemplate';
import ReadMore from '../components/readMore';
import TagPostCard from '../components/tagPostCard';
import TitlePostCard from '../components/titlePostCard';

// import Paragraph from '../components/GlobalComponents/Paragraph/Paragraph';

// const HeadlinePage = styled(Paragraph)`
//   font-size: ${({ theme }) => theme.font.size.head.primary};
//   font-weight: 700;

//   ${({ theme }) => theme.media.desktop} {
//     font-size: ${({ theme }) => theme.font.size.head.desktop};
//   }
// `;

const ExtendBlogTemplate = styled.div`
  margin: 0 calc(5vw - 10px);
  width: calc(90vw + 20px);
  max-width: 1460px;

  @media (min-width: 1600px){
    margin: 0 calc(((100vw - 1460px)/2) + 0px);
  }
`;
const Container = styled.div`
  width: 90vw;
  max-width: 1440px;
  margin: 0 5vw;
  @media only screen and (min-width: 1600px) {
    margin: 0 auto;
  }
`;

const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: auto;

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 22vw 70px 22vw;
  }
`;
const Post = styled.div`
  cursor: pointer;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 170px;
  ${({ theme }) => theme.media.laptop} {
    height: inherit;
  }

  ::after {
    content: '';
    border-radius: 10px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  :nth-child(1) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 1 / 1 / 2 / 3;
    }

    background: hsl(355, 100%, 40%);
  }
  :nth-child(2) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 1 / 3 / 3 / 4;
    }

    background: hsl(355, 100%, 50%);
  }
  :nth-child(3) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 1 / 4 / 3 / 5;
    }

    background: hsl(355, 100%, 60%);
  }
  :nth-child(4) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 2 / 1 / 4 / 2;
    }
    background: hsl(355, 100%, 70%);
  }
  :nth-child(5) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 2 / 2 / 4 / 3;
    }
    background: hsl(355, 100%, 80%);
  }
  :nth-child(6) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 3 / 3 / 4 / 5;
    }
    background: hsl(355, 100%, 90%);
  }

  ${({ theme }) => theme.media.laptop} {
    :hover {
      z-index: 2;
      transform: scale(1.2, 1.2);
    }

    :hover::after {
      opacity: 1;
    }
  }
`;

const IndexPage = () => (
  <BlogTemplate>
    <Container>
      <p>Header</p>
    </Container>
    <ExtendBlogTemplate>
      <ContainerFlex className="row">
        <Post>
          <TagPostCard />
          <TitlePostCard />
          <ReadMore />
        </Post>
        <Post>
          <TagPostCard />
          <TitlePostCard />
          <ReadMore />
        </Post>
        <Post>
          <TagPostCard />
          <TitlePostCard />
          <ReadMore />
        </Post>
        <Post>
          <TagPostCard />
          <TitlePostCard />
          <ReadMore />
        </Post>
        <Post>
          <TagPostCard />
          <TitlePostCard />
          <ReadMore />
        </Post>
        <Post>
          <TagPostCard />
          <TitlePostCard />
          <ReadMore />
        </Post>
      </ContainerFlex>
    </ExtendBlogTemplate>
    <Container>
      <p>Content LP</p>
    </Container>
  </BlogTemplate>
);

export default IndexPage;
