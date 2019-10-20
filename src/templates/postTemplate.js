import React from 'react';
// https://transitionlink.tylerbarnes.ca/

// import styled from 'styled-components';
import { Link } from 'gatsby';
import LayoutTemplate from './layoutTemplate';
// const ThemeWrapper = styled.div`
//   width: 90vw;
//   max-width: 1440px;
//   margin: 0 5vw;
//   @media only screen and (min-width: 1600px) {
//     margin: 0 auto;
//   }
// `;

// eslint-disable-next-line react/prop-types
const PostTemplate = () => (
  <LayoutTemplate>
    <h1>Post title</h1>
    <p>post by (author)</p>
    <p>post body</p>
    <Link to="/">back to all post</Link>
  </LayoutTemplate>
);

export default PostTemplate;
