import React from 'react';
// https://transitionlink.tylerbarnes.ca/

import styled from 'styled-components';
import LayoutTemplate from '../templates/layoutTemplate';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
// import Paragraph from '../components/GlobalComponents/Paragraph/Paragraph';

// const HeadlinePage = styled(Paragraph)`
//   font-size: ${({ theme }) => theme.font.size.head.primary};
//   font-weight: 700;

//   ${({ theme }) => theme.media.desktop} {
//     font-size: ${({ theme }) => theme.font.size.head.desktop};
//   }
// `;

const BlogWrapper = styled.div`
  /* margin: 0 calc(5vw - 10px); */
  margin: 0 -10px;
  width: calc(90vw + 20px);
  max-width: 1460px;

  /* @media (min-width: 1600px){
    margin: 0 calc(((100vw - 1460px)/2) + 0px);
  } */
`;

const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: auto;

  ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 22vw 70px 22vw;
  }

  @media (min-width: 1600px) {
    grid-template-rows: 352px 70px 352px;
  }
`;

const IndexPage = () => {
  const posts = usePosts();
  return (
    <LayoutTemplate>
      {/* <Container> */}
      <p>Header</p>
      {/* </Container> */}
      <BlogWrapper>
        <ContainerFlex>
          {posts.map(post => (
            // eslint-disable-next-line react/jsx-key
            // <pre>{JSON.stringify(post, null, 2)}</pre>
            <PostPreview key={post.slug} post={post}>
              {' '}
            </PostPreview>
          ))}
          {/* <Post>
            <TagPostCard />
            <TitlePostCard />
            <ReadMore />
          </Post> */}
        </ContainerFlex>
      </BlogWrapper>
      {/* <Container> */}
      <p>Content LP</p>
      {/* </Container> */}
    </LayoutTemplate>
  );
};

export default IndexPage;
