import React from 'react';
// https://transitionlink.tylerbarnes.ca/

// import styled from 'styled-components';
import LayoutTemplate from '../templates/layoutTemplate';
import BlogWrapper from '../components/blogWrapper';

const IndexPage = () => {
  return (
    <LayoutTemplate>
      <BlogWrapper />
    </LayoutTemplate>
  );
};

export default IndexPage;
