const path = require("path");
const btoa = require("btoa");

module.exports = {
  siteMetadata: {
    title: `Umami: a Gatsby-Drupal-GraphQL demo`,
    description: `This demo uses the default Gatsby starter and Drupal with the GraphQL 3.x module.`,
    author: `@johnalbin`
  },
  plugins: [
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
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `Drupal`,
        // This is field under which it's accessible
        fieldName: `umami`, // process.env.SB_PROJECT_NAME,
        // Url to query from
        url: `${process.env.SB_BASE_URL}/graphql`,
        // @TODO Add authorization; turn off anonymous graphql query permission.
        headers: {
          // Authorization: `Basic ${btoa(
          //   process.env.SB_ADMIN_USER + ":" + process.env.SB_ADMIN_PASS
          // )}`
        }
      }
    },
    // `gatsby-plugin-graphql-preview`,
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data`,
    //     ignore: [`**/\.*`] // ignore files starting with a dot
    //   }
    // },
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
