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

  // Find the config for gatsby-source-graphql used in gatsby-config.js.
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

  // Organize our results to make building pages easier.
  const data = {
    node: {},
    user: {},
    term: {},
    language: {},
    index: {}
  };
  let defaultLanguage = "und";
  let lastUpdate = 0;
  const setLastUpdate = string => {
    const ts = parseInt(string, 10);
    if (ts > lastUpdate) {
      lastUpdate = ts;
    }
  };

  const variables = {
    // @TODO Cache previous results; use timestamp to query for updated content.
    // changed: "1551947818",
    changed: "0",
    offset: 0,
    limit: 10,
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
              direction
              weight
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
    const totalLanguages = result.availableLanguages.length;
    for (let i = 0; i < totalLanguages; i++) {
      const { id, ...language } = result.availableLanguages[i];
      data.language[id] = {
        // Find the Gatsby slug (path) for a language's homepage.
        slug: totalLanguages > 1 ? `/${id}` : "/",
        ...language,
        argument: language.argument.toUpperCase()
      };
      languages.push(data.language[id]);

      if (language.isDefault) {
        defaultLanguage = id;
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

  // Query for taxonomy terms.
  let terms = [];
  const drupalTaxonomyQuery = `
    query allDrupalTaxonomyQuery(
      $limit: Int = 50
      $offset: Int = 0
      $changed: String = "0"
      $language: Drupal_LanguageId = EN
    ) {
      umami {
        taxonomyTermQuery(
          filter: {conditions: [
            {operator: GREATER_THAN, field: "changed", value: [$changed]}
          ]}
          sort: [
            {field: "tid", direction: ASC}
          ]
          limit: $limit
          offset: $offset
        ) {
          terms: entities {
            ...on Drupal_TaxonomyTerm {
              tid
              taxonomy: entityBundle
              changedUnix: changed
            }
            entityTranslation(language: $language) {
              ...on Drupal_TaxonomyTerm {
                name
                description {
                  value: processed
                }
                langcode {
                  value
                }
                url: entityUrl {
                  path
                }
              }
            }
          }
        }
      }
    }
  `;
  try {
    const queries = [];
    // Taxonomy terms contain less data, so we can query for more at a time.
    const termQueryLimit = 50;
    for (let languageKey in data.language) {
      for (let i = 0; i < termCount; i += termQueryLimit) {
        // Create Promises for each graphql query needed.
        queries.push(
          graphql(drupalTaxonomyQuery, {
            ...variables,
            limit: termQueryLimit,
            offset: i,
            language: data.language[languageKey].argument
          }).then(result => {
            // Check for errors.
            if (result.errors) {
              throw result.errors;
            }
            console.log(
              ` Retrieved ${
                data.language[languageKey].name
              } taxonomy terms ${i + 1}-${
                i + termQueryLimit < termCount ? i + termQueryLimit : termCount
              }.`
            );
            return result.data[gatsbySourceGraphQL.fieldName].taxonomyTermQuery
              .terms;
          })
        );
      }
    }

    // Combine all query results into one list of terms.
    const results = await Promise.all(queries);
    for (let i = 0; i < results.length; i++) {
      terms.push(...results[i]);
    }
  } catch (error) {
    console.error(`\nGraphQL query "allDrupalTaxonomyQuery" failed!`);
    throw error;
  }

  // Only cache the term if it has a translation for the given language.
  terms = terms.filter(term => !!term.entityTranslation);

  // Cache the taxonomy terms.
  for (let i = 0; i < terms.length; i++) {
    const term = terms[i];
    try {
      const language = term.entityTranslation.langcode.value;
      const taxonomy = term.taxonomy;

      // Find the Gatsby slug for a taxonomy's listing page.
      if (!data.index[`taxonomy${taxonomy}-${language}`]) {
        data.index[`taxonomy${taxonomy}-${language}`] = {
          type: "taxonomy",
          slug: path.dirname(term.entityTranslation.url.path),
          taxonomy,
          language
        };
      }

      // Find the Gatsby slug for a taxonomy term's page.
      terms[i] = {
        tid: term.tid,
        taxonomy,
        language,
        changedUnix: term.changedUnix,
        name: term.entityTranslation.name,
        description: term.entityTranslation.description,
        slug: term.entityTranslation.url.path
      };
      data.term[`term${term.tid}-${language}`] = terms[i];
    } catch (e) {
      throw new Error(
        `Failed finding Gatsby slug for taxonomy term, ${
          term.entityTranslation.name
        }: ${e.message}`
      );
    }
  }

  // Query for nodes.
  let nodes = [];
  const drupalContentQuery = `
    query allDrupalContentQuery(
      $limit: Int = 10
      $offset: Int = 0
      $changed: String = "0"
      $language: Drupal_LanguageId = EN
    ) {
      umami {
        nodeQuery(
          filter: {conditions: [
            {field: "status", value: ["1"]}
            {operator: GREATER_THAN, field: "changed", value: [$changed]}
          ]}
          sort: [
            {field: "created", direction: DESC}
          ]
          limit: $limit
          offset: $offset
        ) {
          nodes: entities {
            # Get the same data for any type of node.
            ...on Drupal_Node {
              nid
              nodeType: entityBundle
              published: status
              created: entityCreated
              createdUnix: created
              changed: entityChanged
              changedUnix: changed
              user: entityOwner {
                uid
                name
                entityTranslation(language: $language) {
                  ...on Drupal_User {
                    ...UrlFragment
                  }
                }
              }
            }
            entityTranslation(language: $language) {
              ...on Drupal_Node {
                title
                ...UrlFragment
                language: entityLanguage {
                  id
                }
              }
              # Get data specific to a node type.
              ...ArticleFragment
              ...RecipeFragment
              ...PageFragment
            }
          }
        }
      }
    }

    fragment ArticleFragment on Drupal_NodeArticle {
      body {
        value: processed
        summary: summaryProcessed
      }
      image: fieldImage {
        alt
        title
        width
        height
        url
      }
      tags: fieldTags {
        entity {
          ...TaxonomyTermFragment
        }
      }
    }

    fragment PageFragment on Drupal_NodePage {
      body {
        value: processed
        summary: summaryProcessed
      }
    }

    fragment RecipeFragment on Drupal_NodeRecipe {
      summary: fieldSummary {
        value: processed
      }
      numberOfServings: fieldNumberOfServings
      preparationTime: fieldPreparationTime
      cookingTime:fieldCookingTime
      difficulty: fieldDifficulty
      image: fieldImage {
        alt
        title
        width
        height
        url
      }
      ingredients: fieldIngredients
      recipeInstruction: fieldRecipeInstruction {
        value: processed
      }
      recipeCategory: fieldRecipeCategory {
        entity {
          ...TaxonomyTermFragment
        }
      }
      tags: fieldTags {
        entity {
          ...TaxonomyTermFragment
        }
      }
    }

    fragment UrlFragment on Drupal_Entity {
      url: entityUrl {
        path
        routed
      }
    }

    fragment TaxonomyTermFragment on Drupal_TaxonomyTerm {
      taxonomy: entityBundle
      tid
    }
  `;
  try {
    const queries = [];
    for (let languageKey in data.language) {
      for (let i = 0; i < nodeCount; i += variables.limit) {
        // Create Promises for each graphql query needed.
        queries.push(
          graphql(drupalContentQuery, {
            ...variables,
            offset: i,
            language: data.language[languageKey].argument
          }).then(result => {
            // Check for errors.
            if (result.errors) {
              throw result.errors;
            }
            console.log(
              ` Retrieved ${data.language[languageKey].name} results ${i + 1}-${
                i + variables.limit < nodeCount
                  ? i + variables.limit
                  : nodeCount
              }.`
            );
            return result.data[gatsbySourceGraphQL.fieldName].nodeQuery.nodes;
          })
        );
      }
    }

    // Combine all query results into one list of nodes.
    const results = await Promise.all(queries);
    for (let i = 0; i < results.length; i++) {
      nodes.push(...results[i]);
    }
  } catch (error) {
    console.error(`\nGraphQL query "allDrupalContentQuery" failed!`);
    throw error;
  }

  // Only cache the node if it has a translation for the given language.
  nodes = nodes.filter(node => !!node.entityTranslation);

  // Flatten entity data.
  const flattenTranslation = ({ entityTranslation, ...rest }) => ({
    ...rest,
    ...entityTranslation
  });
  const flattenUrl = value => {
    if (value.url && value.url.path) {
      const {
        url: { path: url },
        ...rest
      } = value;
      return {
        ...rest,
        url
      };
    } else if (value.entityUrl && value.entityUrl.path) {
      const {
        entityUrl: { path: url },
        ...rest
      } = value;
      return {
        ...rest,
        url
      };
    }
    return value;
  };
  const flatten = value => {
    if (!value) {
      return value;
    }

    // Flatten "entityTranslation" values.
    if (value.entityTranslation) {
      value = flattenTranslation(value);
    } else if (value.entity && value.entity.entityTranslation) {
      value = flattenTranslation(value.entity);
    } else if (Array.isArray(value) && value[0]) {
      if (value[0].entity && value[0].entity.entityTranslation) {
        value = value.map(({ entity }) => flattenTranslation(entity));
      } else if (value[0].entityTranslation) {
        value = value.map(value => flattenTranslation(value));
      }
    }

    // Flatten "url" values.
    if (Array.isArray(value)) {
      value = value.map(flattenUrl);
    } else {
      value = flattenUrl(value);
    }

    return value;
  };

  for (let i = 0; i < nodes.length; i++) {
    let {
      entityTranslation: {
        url,
        language: { id: language },
        ...fields
      },
      ...node
    } = nodes[i];

    // Add the entityTranslation fields to the node data.
    try {
      node = {
        ...node,
        ...fields,
        language,
        slug: url.path
      };
    } catch (e) {
      throw new Error(
        `Failed adding entityTranslation fields to node ${node.nid}: ${
          e.message
        }`
      );
    }

    // Flatten field values
    for (let fieldName in node) {
      try {
        node[fieldName] = flatten(node[fieldName]);
      } catch (e) {
        throw new Error(
          `Failed flattening values of node ${node.nid}'s ${fieldName}: ${
            e.message
          }`
        );
      }
    }

    // Flatten body field.
    if (node.body) {
      if (typeof node.body.summary !== "undefined") {
        node.bodySummary = node.body.summary;
      }
      if (typeof node.body.value !== "undefined") {
        node.body = node.body.value;
      }
    }

    nodes[i] = node;
  }

  // Find all users.
  const users = [];
  for (let i = 0; i < nodes.length; i++) {
    // Only cache the user if they have a translation for the given language.
    if (nodes[i].user.url) {
      let user = nodes[i].user;
      const language = nodes[i].language;

      // Find the Gatsby slug for a user listing page.
      try {
        if (!data.index[`user-${language}`]) {
          data.index[`user-${language}`] = {
            type: "user",
            slug: path.dirname(user.url),
            language
          };
        }
      } catch (e) {
        throw new Error(
          `Failed finding Gatsby slug for the user listing page: ${e.message}`
        );
      }

      // Find Gatsby slugs for users.
      try {
        if (!data.user[`user${user.uid}-${language}`]) {
          const { url, ...userData } = user;
          user = {
            ...userData,
            language,
            slug: url
          };
          data.user[`user${user.uid}-${language}`] = user;
          users.push(user);
        }
      } catch (e) {
        throw new Error(
          `Failed finding Gatsby slug for user ${user.uid}: ${e.message}`
        );
      }
    }
  }

  const getTaxonomyTerm = ({ tid, language }) => {
    const { changedUnix, ...term } = data.term[`term${tid}-${language}`]
      ? data.term[`term${tid}-${language}`]
      : data.term[`term${tid}-${defaultLanguage}`];
    return term;
  };
  const getEntity = ({ type, id, language }) => {
    const { changedUnix, ...entity } = data[type][`${type}${id}-${language}`]
      ? data[type][`${type}${id}-${language}`]
      : data[type][`${type}${id}-${defaultLanguage}`];
    return entity;
  };

  for (let i = 0; i < nodes.length; i++) {
    const language = nodes[i].language;
    const node = nodes[i];

    // Add taxonomy term data.
    try {
      for (let fieldName in node) {
        if (!node[fieldName]) {
          continue;
        }
        if (node[fieldName].taxonomy) {
          node[fieldName] = getEntity({
            type: "term",
            id: node[fieldName].tid,
            language
          });
        } else if (
          Array.isArray(node[fieldName]) &&
          node[fieldName][0] &&
          node[fieldName][0].taxonomy
        ) {
          for (let j = 0; j < node[fieldName].length; j++) {
            if (node[fieldName][j].tid) {
              node[fieldName][j] = getTaxonomyTerm({
                tid: node[fieldName][j].tid,
                language
              });
            }
          }
        }
      }
    } catch (e) {
      throw new Error(
        `Failed adding taxonomy terms for ${node.nodeType} node ${node.nid}: ${
          e.message
        }`
      );
    }

    // Find the Gatsby slug for a node type's listing page.
    try {
      if (
        node.nodeType !== "page" &&
        !data.index[`node${node.nodeType}-${language}`]
      ) {
        data.index[`node${node.nodeType}-${language}`] = {
          type: "node",
          slug: path.dirname(node.slug),
          nodeType: node.nodeType,
          language
        };
      }
    } catch (e) {
      throw new Error(
        `Failed finding Gatsby slug for the ${node.nodeType} listing page: ${
          e.message
        }`
      );
    }

    // Find Gatsby slugs for nodes.
    try {
      nodes[i] = {
        ...node
      };
      data.node[`node${node.nid}-${language}`] = {
        ...node
      };
    } catch (e) {
      throw new Error(
        `Failed finding Gatsby slug for ${node.nodeType} node ${node.nid}: ${
          e.message
        }`
      );
    }
  }

  await Promise.all([
    fsPromises.writeFile(
      path.resolve(`src/data/.cache.json`),
      JSON.stringify(data)
    ),
    fsPromises.writeFile(
      path.resolve(`src/data/drupal-language.json`),
      JSON.stringify(languages)
    ),
    fsPromises.writeFile(
      path.resolve(`src/data/drupal-term.json`),
      JSON.stringify(terms)
    ),
    fsPromises.writeFile(
      path.resolve(`src/data/drupal-user.json`),
      JSON.stringify(users)
    ),
    fsPromises.writeFile(
      path.resolve(`src/data/drupal-node.json`),
      JSON.stringify(nodes)
    )
  ]);

  // Build pages.
  try {
    // Helper to convert Drupal entity names to file-name-friendly strings.
    const toFilename = string => string.replace(/_/g, "-");

    // Node pages.
    for (let key in data.node) {
      const { slug, ...node } = data.node[key];
      try {
        // Skip unpublished nodes.
        if (!node.published) {
          continue;
        }

        // data.node[`node${node.nid}-${language}`]
        console.log(`${key}: ${data.node[key].slug}`);
        // createPage({
        //   path: slug,
        //   component: path.resolve(
        //     `./src/templates/node-${toFilename(node.nodeType)}.js`
        //   ),
        //   context: node
        // });
      } catch (error) {
        throw new Error(
          `Failed building ${node.nodeType} node ${node.nid} page: ${e.message}`
        );
      }
    }

    // Term pages.
    for (let key in data.term) {
      // data.term[`term${tid}-${language}`]
      console.log(`${key}: ${data.term[key].slug}`);
      // createPage({
      //   path: slug,
      //   component: path.resolve(`./src/templates/taxonomy-term-${toFilename(term)}.js`),
      //   context,
      // });
    }

    // User pages.
    for (let key in data.user) {
      // data.user[`user${user.uid}-${language}`]
      console.log(`${key}: ${data.user[key].slug}`);
    }

    // Listing pages.
    for (let key in data.index) {
      // data.index[`user-${language}`]
      // data.index[`taxonomy${taxonomy}-${language}`]
      // data.index[`node${node.nodeType}-${language}`]
      console.log(`${key}: ${data.index[key].slug}`);
      // createPage({
      //   path: slug,
      //   component: path.resolve(`./src/templates/index-node-${toFilename(nodeType)}.js`),
      //   context,
      // });
    }

    // Homepages.
    for (let key in data.language) {
      // data.language[id]
      console.log(`${key}: ${data.language[key].slug}`);
      // createPage({
      //   path: '/',
      //   component: path.resolve(`./src/templates/index.js`),
      //   context: {
      //     path: '/',
      //   },
      // });
    }
  } catch (error) {
    console.error(`\nGatsby createPage build failed!`);
    throw error;
  }
};
