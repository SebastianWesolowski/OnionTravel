import React from 'react';
import PropTypes from 'prop-types';
import ReadMore from 'components/readMore';
import TagPostCard from 'components/tagPostCard';
import TitlePostCard from 'components/titlePostCard';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled, { css } from 'styled-components';

const UnDecorationLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  position: absolute;
  margin: -15px;
  padding: 15px;
`;

const StyledWrapper = styled.article`
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
  }
  :nth-child(2) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 1 / 3 / 3 / 4;
    }
  }
  :nth-child(3) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 1 / 4 / 3 / 5;
    }
  }
  :nth-child(4) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 2 / 1 / 4 / 2;
    }
  }
  :nth-child(5) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 2 / 2 / 4 / 3;
    }
  }
  :nth-child(6) {
    ${({ theme }) => theme.media.laptop} {
      grid-area: 3 / 3 / 4 / 5;
    }
  }
`;

const PostPreview = ({ post, position }) => {
  let imagePositionPost = post.imageVertical;
  if (position === 0 || position === 5) {
    imagePositionPost = post.imageHorizontal;
  }

  return (
    <StyledWrapper>
      <UnDecorationLink to={post.slug}>
        <TagPostCard />
        <TitlePostCard title={post.title} />
        {/* <p>{post.excerpt}</p> */}
        <ReadMore />
        <Image
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
          fluid={{ ...imagePositionPost, aspectRatio: 1 }}
        />
      </UnDecorationLink>
    </StyledWrapper>
  );
};

PostPreview.propTypes = {
  position: PropTypes.any,
  post: PropTypes.object,
};

PostPreview.defaultProps = {
  position: 1,
  post: {
    title: 'Helow Wprld!',
    author: 'SW',
    slug: 'hello-world',
    excerpt: 'The standard Lorem Ipsum passage, used since th',
  },
};

export default PostPreview;
