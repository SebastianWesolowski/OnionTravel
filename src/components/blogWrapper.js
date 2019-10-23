import React from 'react';
// https://transitionlink.tylerbarnes.ca/

import styled from 'styled-components';
// import LayoutTemplate from '../templates/layoutTemplate';
import usePosts from '../hooks/use-posts';
import PostPreview from './post-preview';

// const HeadlinePage = styled(Paragraph)`
//   font-size: ${({ theme }) => theme.font.size.head.primary};
//   font-weight: 700;

//   ${({ theme }) => theme.media.desktop} {
//     font-size: ${({ theme }) => theme.font.size.head.desktop};
//   }
// `;

const StyledWraper = styled.section`
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

const BlogWrapper = () => {
  console.clear();

  const splitObjectInArray = (objectData, equalCounter) => {
    let arr = objectData;
    const localEequalCounter = equalCounter;
    const dividedArray = [];

    const removeFirstsElement = (arrayElements, count) => {
      const arrData = arrayElements;
      arrData.reverse().length = arrData.length - count;
      return arrData.reverse();
    };

    do {
      if (arr.length <= localEequalCounter) {
        dividedArray.push(arr.slice(0, arr.length));
        arr = removeFirstsElement(arr, arr.length);
        break;
      }
      const onePart = arr.slice(0, localEequalCounter);
      dividedArray.push(onePart);
      arr = removeFirstsElement(arr, localEequalCounter);
    } while (arr.length > 0);

    return dividedArray;
  };

  const posts = usePosts();
  const splitPosts = splitObjectInArray(posts, 6);

  return (
    <StyledWraper>
      {splitPosts.map((groupPost, index) => (
        <ContainerFlex key={`groupPost-${index}`}>
          {groupPost.map(post => (
            <PostPreview key={post.slug} post={post} postContain={groupPost.length} />
          ))}
        </ContainerFlex>
      ))}
    </StyledWraper>
  );
};

export default BlogWrapper;
