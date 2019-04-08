export const getDrupalSetupQuery = ({ fieldName = "", typeName = "" }) => `
  query drupalSetupQuery(
    $changed: String = "0"
  ) {
    ${fieldName ? `${fieldName} {` : ""}
      availableLanguages {
        id
        name
        direction
        weight
        argument
        isDefault
      }
      taxonomyTermQuery(
        filter: {conditions: [
          {operator: GREATER_THAN, field: "changed", value: [$changed]}
        ]}
      ) {
        count
      }
      nodeQuery(
        filter: {conditions: [
          {field: "status", value: ["1"]}
          {operator: GREATER_THAN, field: "changed", value: [$changed]}
        ]}
      ) {
        count
      }
    ${fieldName ? "}" : ""}
  }
`;

export const getDrupalTaxonomyQuery = ({ fieldName = "", typeName = "" }) => `
  query allDrupalTaxonomyQuery(
    $limit: Int = 50
    $offset: Int = 0
    $changed: String = "0"
    $language: ${typeName}LanguageId = EN
  ) {
    ${fieldName ? `${fieldName} {` : ""}
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
          ...on ${typeName}TaxonomyTerm {
            tid
            taxonomy: entityBundle
            changedUnix: changed
          }
          translated: entityTranslation(language: $language) {
            ...on ${typeName}TaxonomyTerm {
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
    ${fieldName ? "}" : ""}
  }
`;

export const getDrupalContentQuery = ({ fieldName = "", typeName = "" }) => `
  query allDrupalContentQuery(
    $limit: Int = 10
    $offset: Int = 0
    $changed: String = "0"
    $language: ${typeName}LanguageId = EN
  ) {
    ${fieldName ? `${fieldName} {` : ""}
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
          ...on ${typeName}Node {
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
              translated: entityTranslation(language: $language) {
                ...on ${typeName}User {
                  ...UrlFragment
                }
              }
            }
          }
          translated: entityTranslation(language: $language) {
            ...on ${typeName}Node {
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
    ${fieldName ? "}" : ""}
  }

  fragment ArticleFragment on ${typeName}NodeArticle {
    body {
      ...FieldBodyFragment
    }
    image: fieldImage {
      ...FieldImageFragment
    }
    tags: fieldTags {
      entity {
        ...TaxonomyTermFragment
      }
    }
  }

  fragment PageFragment on ${typeName}NodePage {
    body {
      ...FieldBodyFragment
    }
  }

  fragment RecipeFragment on ${typeName}NodeRecipe {
    summary: fieldSummary {
      value: processed
    }
    numberOfServings: fieldNumberOfServings
    preparationTime: fieldPreparationTime
    cookingTime:fieldCookingTime
    difficulty: fieldDifficulty
    image: fieldImage {
      ...FieldImageFragment
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

  fragment UrlFragment on ${typeName}Entity {
    url: entityUrl {
      path
      routed
    }
  }

  fragment FieldBodyFragment on ${typeName}FieldNodeBody {
    value: processed
    summary: summaryProcessed
  }

  fragment FieldImageFragment on ${typeName}FieldNodeFieldImage {
    alt
    title
    width
    height
    url
  }

  fragment TaxonomyTermFragment on ${typeName}TaxonomyTerm {
    taxonomy: entityBundle
    tid
  }
`;
