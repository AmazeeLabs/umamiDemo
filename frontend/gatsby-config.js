module.exports = {
  siteMetadata: {
    title: `Umami: a Gatsby-Drupal-GraphQL demo`,
    description: `This demo uses the default Gatsby starter and Drupal with the GraphQL 3.x module.`,
    author: `@johnalbin`
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `Drupal`,
        // This is field under which it's accessible
        fieldName: process.env.SB_PROJECT_NAME,
        // Url to query from
        url: `${process.env.SB_BASE_URL}/graphql`
        // @TODO Add authorization; turn off anonymous graphql query permission.
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
