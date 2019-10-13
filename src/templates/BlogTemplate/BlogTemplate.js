import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import theme from '../../assets/styles/theme';
import SEO from '../../components/seo';

const ThemeWrapper = styled.div`
  /* background: blue; */
`;
// eslint-disable-next-line react/prop-types
const BlogTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <SEO title="Home" />
      <ThemeWrapper>{children}</ThemeWrapper>
    </>
  </ThemeProvider>
);

export default BlogTemplate;
