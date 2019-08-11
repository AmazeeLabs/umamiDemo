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

Specifically, we would like to:
- Create a `using-drupal-graphql` example, using the Drupal GraphQL 8.x-3.0 module, that goes into Gatsby's git repo along side the [Drupal-core-only `using-drupal` example](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal).
- Upgrade the demo to use GraphQL 8.x-4.0 module (once it's released).

## Installation

There's lots of different "easy-to-setup development environments". This demo site uses drush to serve the website. You don't have to use drush; you just need a Drupal 8.7.x website installed with the Umami install profile and the Drupal GraphQL. Then can use the Gatsby files in this demo with the website you've setup; just change the URL configured in `gatsby-config.js`.

#### Prerequisites

1. Install the [Drush launcher](https://github.com/drush-ops/drush-launcher). Alternatively, when the installation instructions say to run `drush`, run `./vendor/bin/drush` instead.
2. Install [Composer](https://getcomposer.org/).

#### Drupal install

1. Clone this repository using a recent version of Git. (If you are using an older version of Git, you will also need to run `git submodule init` and `git submodule update` after you clone the repo.)
2. Go into the `backend` folder where you can complete all of the following steps.
3. Copy the `backup/files` folder to `web/sites/default`. i.e. The copy of the folder will now be located at `backend/web/sites/default/files`.
4. Setup the Drupal install with `composer install`
5. Start the Drupal site with `drush serve`
6. Optionally, `drush uli --uri http://127.0.0.1:8888` will load the site in your browser and log you in as admin.

#### Gatsby install

1. Go into the `frontend` directory and run `npm install`
2. Use `npm run` to show a list of commands available.
3. Use `npm run start` to start the web and Gatsby development servers. You should see the following:

    ```
    You can now view gatsby-starter-default in the browser.

      http://localhost:8000/

    View GraphiQL, an in-browser IDE, to explore your
    site's data and schema

      http://localhost:8000/___graphql
    ```
