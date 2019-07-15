# Umami Demo: with Gatsby, Drupal and GraphQL

This [demo web site](https://amazeelabs.github.io/umamiDemo/) is built with:
- **Gatsby 2.x** static suite builder, including:
  - CSS Modules for styling
  - the `gatsby-source-graphql` plugin, which uses schema stitching to merge 3rd party GraphQL schemas.
- **Drupal 8.7.x** content management system, including:
  - the Umami install profile with multi-lingual demo content
  - the GraphQL 3.x module with a GraphQL endpoint exposing Drupal content

## Goals

This is an experiment to try to out the integration between Gatsby and Drupal using the GraphQL module instead of the JSON:API module. There is lots of work being done with the JSON:API and experimenting with the GraphQL module should help to highlight the pros and cons of both approaches.

Discussions and code improvements are welcome!

## Installation

There's lots of different "easy-to-setup development environments". This demo site uses Silverback which requires direnv and sqlite. You don't have to use Silverback; you just need a Drupal 8.7.x website installed with the Umami install profile and the Drupal GraphQL. Then can use the Gatsby files in this demo with the website you've setup; just change the URL configured in `gatsby-config.js`.

#### Prerequisites

1. Install `direnv`
    - For Mac OS X homebrew users: `brew install direnv`
    - For other environments, see https://direnv.net/index.html#install
2. Configure `direnv` by following the instructions at https://direnv.net/index.html#setup
3. Install the [Drush launcher](https://github.com/drush-ops/drush-launcher). Alternatively, when the installation instructions say to run `drush`, run `./vendor/bin/drush` instead.

#### Drupal install

1. Clone this repository and `cd` into its directory.
2. Run `direnv allow` (this step won't work until you setup the prerequisites.)
3. Setup the Drupal install with `composer install`
4. Delete the `web/sites/default` folder and copy the `backup/default` folder to `web/sites/`.
5. Start the Drupal site with `drush serve`
6. `drush uli` will load the site in your browser and log you in as admin.

#### Gatsby install

1. Go into the `frontend` directory and run `yarn install`
2. Use `yarn run` to show a list of commands available.
3. Run `yarn run start` to start the web and Gatsby development servers. You should see the following:

    ```
    You can now view gatsby-starter-default in the browser.

      http://localhost:8000/

    View GraphiQL, an in-browser IDE, to explore your
    site's data and schema

      http://localhost:8000/___graphql
    ```
