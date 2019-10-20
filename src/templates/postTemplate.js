import React from 'react';
// https://transitionlink.tylerbarnes.ca/

// import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import LayoutTemplate from './layoutTemplate';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;
// eslint-disable-next-line react/prop-types
const PostTemplate = ({ data: { mdx: post } }) => (
  <LayoutTemplate>
    <h1>{post.frontmatter.title}</h1>
    <p>Autor: {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    {/* <pre>{JSON.stringify(pageContext, null,   2)}</pre> */}

    <Link to="/">back to all post</Link>
  </LayoutTemplate>
);

export default PostTemplate;
