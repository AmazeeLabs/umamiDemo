/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Gatsby build steps:
// https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/

import path from "path";
import { promises as fsPromises } from "fs";
// import gatsbyConfig from "./gatsby-config";

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // We could find the config values for gatsby-source-graphql.
  // for (let i = 0; i < gatsbyConfig.plugins.length; i++) {
  //   if (gatsbyConfig.plugins[i].resolve === "gatsby-source-graphql") {
  //     gatsbySourceGraphQL = {
  //       // All of Drupal's graphQL data is available underneath
  //       // the configured fieldName.
  //       fieldName: gatsbyConfig.plugins[i].options.fieldName,
  //       // gatsby-source-graphql adds the configured typeName
  //       // and an underscore to all Drupal type names.
  //       typeName: gatsbyConfig.plugins[i].options.typeName
  //     };
  //   }
  // }
  // But hard-coding is easier.
  const gatsbySourceGraphQL = {
    fieldName: "umami",
    typeName: "Drupal"
  };

  // Specify how Drupal-configured paths should map to React components.
  const pathMapping = [
    {
      test: /^\/articles\/.+$/,
      component: path.resolve(`./src/templates/node-article.js`)
    },
    {
      test: /^\/recipes\/.+$/,
      component: path.resolve(`./src/templates/node-recipe.js`)
    },
    {
      test: /^\/recipe\-category\/.+$/,
      component: path.resolve(
        `./src/templates/taxonomy-term-recipe-category.js`
      )
    },
    {
      test: /^\/tags\/.+$/,
      component: path.resolve(`./src/templates/taxonomy-term-tags.js`)
    },
    {
      test: /^\/articles$/,
      component: path.resolve(`./src/templates/index-articles.js`)
    },
    {
      test: /^\/recipes$/,
      component: path.resolve(`./src/templates/index-recipes.js`)
    },
    {
      test: /^\/$/,
      component: path.resolve(`./src/templates/index.js`)
    },
    // This is the catch-all since Page node URLs follow no pattern.
    {
      test: /^\/.+$/,
      component: path.resolve(`./src/templates/node-page.js`)
    }
  ];

  const getComponent = (language, slug) => {
    const url =
      slug === `/${language}` ? "/" : slug.replace(`/${language}/`, "/");
    for (let i = 0; i < pathMapping.length; i++) {
      if (pathMapping[i].test.test(url)) {
        return pathMapping[i].component;
      }
    }
    throw new Error(`No template found for ${slug}`);
  };

  let defaultLanguage = {
    id: "und",
    name: "Undefined",
    enum: "UND",
    isDefault: true
  };
  let lastChanged = 0;
  const setLastChanged = string => {
    const ts = parseInt(string, 10);
    if (ts > lastChanged) {
      lastChanged = ts;
    }
  };

  const variables = {
    // @TODO Cache previous results; use timestamp to query for updated content.
    // changed: "1551947818",
    changed: "0",
    offset: 0,
    limit: 100,
    language: "EN"
  };

  let nodeCount;
  let termCount;
  const languages = [];
  try {
    let result = await graphql(
      `
        query drupalSetupQuery($changed: String = "0") {
          umami {
            availableLanguages {
              id
              name
              argument
              isDefault
            }
            taxonomyTermQuery(
              filter: {
                conditions: [
                  {
                    operator: GREATER_THAN
                    field: "changed"
                    value: [$changed]
                  }
                ]
              }
            ) {
              count
            }
            nodeQuery(
              filter: {
                conditions: [
                  { field: "status", value: ["1"] }
                  {
                    operator: GREATER_THAN
                    field: "changed"
                    value: [$changed]
                  }
                ]
              }
            ) {
              count
            }
          }
        }
      `,
      variables
    );

    if (result.errors) {
      throw result.errors;
    }

    result = result.data[gatsbySourceGraphQL.fieldName];

    // Store the languages.
    for (let i = 0; i < result.availableLanguages.length; i++) {
      const { argument, ...rest } = result.availableLanguages[i];
      const language = {
        enum: argument.toUpperCase(),
        ...rest
      };
      languages.push(language);

      if (language.isDefault) {
        defaultLanguage = language;
      }
    }

    // Find total number of terms and nodes.
    nodeCount = result.nodeQuery.count;
    termCount = result.taxonomyTermQuery.count;

    console.log(
      ` Found ${nodeCount}${
        variables.changed > 0 ? " new" : ""
      } Drupal nodes and ${termCount}${
        variables.changed > 0 ? " new" : ""
      } taxonomy terms.`
    );
  } catch (error) {
    console.error(`\nGraphQL query "drupalSetupQuery" failed!`);
    throw error;
  }

  const slugs = {
    // @TODO Replace this duplicate build of the homepage with a page that does
    //   language negotiation with the browser.
    "/": {
      path: "/",
      component: getComponent(defaultLanguage.id, "/"),
      context: {
        language: defaultLanguage.enum
      }
    }
  };

  // Query for main menu links.
  const getMainMenuSlugs = async language => {
    try {
      const result = await graphql(
        `
          query menuLinksQuery($language: Drupal_LanguageId = EN) {
            umami {
              menuByName(name: "main", language: $language) {
                links {
                  label
                  url {
                    path
                  }
                }
              }
            }
          }
        `,
        {
          ...variables,
          language: language.enum
        }
      );

      // Check for errors.
      if (result.errors) {
        throw result.errors;
      }

      console.log(` Retrieved ${language.name} menu links.`);
      result.data.umami.menuByName.links.forEach(
        ({ label: title, url: { path: url } }) => {
          slugs[url] = {
            path: url,
            component: getComponent(language.id, url),
            context: {
              language: language.enum,
              title
            }
          };
        }
      );
    } catch (error) {
      console.error(
        `\nGraphQL query "menuLinksQuery(${language.name})" failed!`
      );
      throw error;
    }
  };

  // Query for taxonomy terms.
  const getTaxonomyTermSlugs = async (language, offset) => {
    try {
      const result = await graphql(
        `
          query taxonomyTermsQuery(
            $limit: Int = 100
            $offset: Int = 0
            $changed: String = "0"
            $language: Drupal_LanguageId = EN
          ) {
            umami {
              taxonomyTermQuery(
                filter: {
                  conditions: [
                    {
                      operator: GREATER_THAN
                      field: "changed"
                      value: [$changed]
                    }
                  ]
                }
                limit: $limit
                offset: $offset
              ) {
                entities {
                  entityTranslation(language: $language) {
                    ... on Drupal_TaxonomyTerm {
                      changed
                      entityUrl {
                        path
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        {
          ...variables,
          language: language.enum,
          offset
        }
      );

      // Check for errors.
      if (result.errors) {
        throw result.errors;
      }

      console.log(
        ` Retrieved ${language.name} taxonomy terms ${offset + 1}-${
          offset + variables.limit < termCount
            ? offset + variables.limit
            : termCount
        }.`
      );
      result.data.umami.taxonomyTermQuery.entities.forEach(term => {
        if (!term.entityTranslation) {
          return;
        }
        const {
          entityTranslation: {
            changed,
            entityUrl: { path: url }
          }
        } = term;
        setLastChanged(changed);
        slugs[url] = {
          path: url,
          component: getComponent(language.id, url),
          context: {
            language: language.enum
          }
        };
      });
    } catch (error) {
      console.error(
        `\nGraphQL query "taxonomyTermsQuery(${language.name})" failed!`
      );
      throw error;
    }
  };

  // Query for nodes.
  const getNodeSlugs = async (language, offset) => {
    try {
      const result = await graphql(
        `
          query nodesQuery(
            $limit: Int = 10
            $offset: Int = 0
            $changed: String = "0"
            $language: Drupal_LanguageId = EN
          ) {
            umami {
              nodeQuery(
                filter: {
                  conditions: [
                    { field: "status", value: ["1"] }
                    {
                      operator: GREATER_THAN
                      field: "changed"
                      value: [$changed]
                    }
                  ]
                }
                sort: [{ field: "created", direction: DESC }]
                limit: $limit
                offset: $offset
              ) {
                entities {
                  entityTranslation(language: $language) {
                    ... on Drupal_Node {
                      published: entityPublished
                      changed
                      entityUrl {
                        path
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        {
          ...variables,
          language: language.enum,
          offset
        }
      );

      // Check for errors.
      if (result.errors) {
        throw result.errors;
      }

      console.log(
        ` Retrieved ${language.name} nodes ${offset + 1}-${
          offset + variables.limit < nodeCount
            ? offset + variables.limit
            : nodeCount
        }.`
      );
      result.data.umami.nodeQuery.entities.forEach(node => {
        if (!node.entityTranslation) {
          return;
        }
        const {
          entityTranslation: {
            published,
            changed,
            entityUrl: { path: url }
          }
        } = node;
        setLastChanged(changed);
        if (published) {
          slugs[url] = {
            path: url,
            component: getComponent(language.id, url),
            context: {
              language: language.enum
            }
          };
        }
      });
    } catch (error) {
      console.error(`\nGraphQL query "nodesQuery(${language.name})" failed!`);
      throw error;
    }
  };

  // Run all queries in parallel.
  const queries = [];
  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];

    queries.push(getMainMenuSlugs(language));

    for (let offset = 0; offset < termCount; offset += variables.limit) {
      queries.push(getTaxonomyTermSlugs(language, offset));
    }

    for (let offset = 0; offset < nodeCount; offset += variables.limit) {
      queries.push(getNodeSlugs(language, offset));
    }
  }
  await Promise.all(queries);

  // Build pages.
  try {
    for (let key in slugs) {
      const slug = slugs[key];

      console.log(
        `${slug.context.language} - ${path.basename(slug.component)}: ${
          slug.path
        }`
      );
      // createPage(slug);
    }
  } catch (error) {
    console.error(`\nGatsby createPage build failed!`);
    throw error;
  }
};
