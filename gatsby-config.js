module.exports = {
  siteMetadata: {
    title: `Docs`,
    description: `Bibliotheca of Linguistics, Logic, and Lisp.`,
    author: `TANIGUCHI Masaya`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `pages`,
            path: `${__dirname}/src/pages/`,
        }
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
            defaultLayouts: {
                pages: require.resolve("./src/components/layout.tsx"),
            },
            gatsbyRemarkPlugins: [
                `gatsby-remark-images`
            ]
        }
    },
    {
        resolve: `gatsby-plugin-web-font-loader`,
        options: {
            google: {
                families: [`DM Serif Display`, `Merriweather`, `Noto Serif JP`, `Noto Serif SC`]
            }
        }
    }
  ],
}