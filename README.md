# Umami Demo

This is a playground demo that uses:
- Drupal with the GraphQL 3.x module and the Umami demo content as the backend
- Gatsby with CSS Modules on the frontend

## Prerequisites

1. Install `direnv`
    1. For Mac OS X homebrew users: `brew install direnv`
    2. For other environments, see https://direnv.net/index.html#install
2. Configure `direnv` by following the instructions at https://direnv.net/index.html#setup

## Installation

1. Clone this repository and `cd` into its directory.
2. Run `direnv allow` (this step won't work until you setup the prerequisites.)
3. Setup the Drupal install with `composer install`
4. Delete the `web/sites/default` folder and copy the `backup/default` folder to `web/sites/`.
5. Start the Drupal site with `drush serve`
6. `drush uli` will load the site in your browser and log you in as admin.
7. Go into the `frontend` directory and run `yarn install`
8. `yarn run` to show a list of commands available.

@TODO finish the docs
