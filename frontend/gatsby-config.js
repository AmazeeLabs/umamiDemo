const path = require("path");
const btoa = require("btoa");

module.exports = {
  siteMetadata: {
    title: `Umami: a Gatsby-Drupal-GraphQL demo`,
    description: `This demo uses the default Gatsby starter and Drupal with the GraphQL 3.x module.`,
    author: `@johnalbin`
  },
  plugins: [
    {
      // Documentation: https://www.gatsbyjs.org/packages/gatsby-source-graphql/
      resolve: "gatsby-source-graphql",
      options: {
        // The names of all types in the remote schema will be prefixed with this word.
        typeName: `Drupal`,
        // The entire remote schema is available under this field.
        fieldName: `umami`,
        // Endpoint URL.
        url: `http://127.0.0.1:8888/graphql`,
        headers: {
          Authorization: `Basic ${btoa("api-user:api-user")}`
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        css: path.join(__dirname, "src/css"),
        templates: path.join(__dirname, "src/templates")
      }
    },
    // A Gatsby plugin to automatically make the source-graphql parts of your
    // application available as a live preview.
    // `gatsby-plugin-graphql-preview`,
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
        name: `gatsby-drupal-umami`,
        short_name: `umami`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
