const path = require('path');
const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-webpack-size`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/layoutTemplate.js'),
        },
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:100,300,400,500,700,900'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/.*\.svg$/,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-root-import',
    //   options: {
    //     assets: path.join(__dirname, 'src/assets'),
    //     components: path.join(__dirname, 'src/components'),
    //     pages: path.join(__dirname, 'src/pages'),
    //     templates: path.join(__dirname, 'src/templates'),
    //     utils: path.join(__dirname, 'src/utils'),
    //     src: path.join(__dirname, 'src'),
    //   },
    // },
    {
      resolve: 'gatsby-plugin-styled-components',
      option: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      option: {
        test: /\.js$/,
        exclude: /(node_modules|cache|plublic)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      option: {
        files: ['**/*.js'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        jpegProgressive: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
