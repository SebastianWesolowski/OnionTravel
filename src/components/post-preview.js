import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import ReadMore from './readMore';
import TagPostCard from './tagPostCard';
import TitlePostCard from './titlePostCard';

const UnDecorationLink = styled(Link)`
  text-decoration: none;
  width: calc(100% + 30px);
  margin: -15px;
  padding: 15px;
  padding-bottom: 55px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  margin-top: auto;
  width: 360px;
  max-width: 100%;
  height: 170px;
  bottom: 0px;

  left: 0px;
  top: 0px;
  border-radius: 10px;
  z-index: -1;
  /* margin-left: calc(100% - 360px); */

  ${({ theme }) => theme.media.phone} {
    margin-left: calc(100% - 360px);
  }

  ${({ theme }) => theme.media.laptop} {
    width: 100%;
    height: 100%;
    margin-left: auto;
  }
`;

const StyledWrapper = styled.article`
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  min-height: 170px;
  height: auto;

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

  ${({ theme }) => theme.media.laptop} {
    &.contain-1-posts {
      :nth-child(1) {
        grid-area: 1 / 1 / 4 / 5;
      }
    }
    &.contain-2-posts {
      :nth-child(1) {
        grid-area: 1 / 1 / 4 / 4;
      }
      :nth-child(2) {
        grid-area: 1 / 4 / 4 / 5;
      }
    }
    &.contain-3-posts {
      :nth-child(1) {
        grid-area: 1 / 1 / 3 / 3;
      }
      :nth-child(2) {
        grid-area: 3 / 1 / 4 / 3;
      }
      :nth-child(3) {
        grid-area: 1 / 5 / 4 / 3;
      }
    }
    &.contain-4-posts {
      :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }
      :nth-child(2) {
        grid-area: 1 / 3 / 4 / 3;
      }
      :nth-child(3) {
        grid-area: 1 / 5 / 4 / 4;
      }
      :nth-child(4) {
        grid-area: 2 / 1 / 4 / 3;
      }
    }
    &.contain-5-posts {
      :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }
      :nth-child(2) {
        grid-area: 1 / 3 / 3 / 4;
      }
      :nth-child(3) {
        grid-area: 1 / 4 / 3 / 5;
      }
      :nth-child(4) {
        grid-area: 2 / 1 / 4 / 3;
      }
      :nth-child(5) {
        grid-area: 3 / 3 / 4 / 5;
      }
    }
    &.contain-6-posts {
      :nth-child(1) {
        grid-area: 1 / 1 / 2 / 3;
      }
      :nth-child(2) {
        grid-area: 1 / 3 / 3 / 4;
      }
      :nth-child(3) {
        grid-area: 1 / 4 / 3 / 5;
      }
      :nth-child(4) {
        grid-area: 2 / 1 / 4 / 2;
      }
      :nth-child(5) {
        grid-area: 2 / 2 / 4 / 3;
      }
      :nth-child(6) {
        grid-area: 3 / 3 / 4 / 5;
      }
    }
  }
`;

const PostPreview = ({ post, postContain }) => {
  // let imagePositionPost = post.imageHorizontal;
  // if (position === 0 || position === 5) {
  //   imagePositionPost = post.imageVertical;
  // }

  return (
    <StyledWrapper className={`contain-${postContain}-posts`} style={{ backgroundColor: '#020506' }}>
      <UnDecorationLink to={post.slug}>
        <TagPostCard />
        <TitlePostCard title={post.title} />
        <ReadMore />
        <StyledImage
          style={{
            position: 'absolute',
          }}
          alt={post.title}
          fluid={{ ...post.imageHorizontal, aspectRatio: 1 }}
        />
        {/* <Image
          style={{
            marginTop: 0,
            width: '100%',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            borderRadius: '10px',
            zIndex: -1,
          }}
          alt={post.title}
          fluid={{ ...post.imageHorizontal, aspectRatio: 1 }}
        /> */}
      </UnDecorationLink>
    </StyledWrapper>
  );
};

PostPreview.propTypes = {
  postContain: PropTypes.number,
  post: PropTypes.object,
};

PostPreview.defaultProps = {
  postContain: 1,
  post: {
    title: 'Helow Wprld!',
    author: 'SW',
    slug: 'hello-world',
    excerpt: 'The standard Lorem Ipsum passage, used since th',
  },
};

export default PostPreview;
