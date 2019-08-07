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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
};
