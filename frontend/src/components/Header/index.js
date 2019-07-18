import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";


const Header = ({ language }) => {
  // @TODO Don't hard-code the nav links.
  const navLinks =
    language === "en"
      ? [
          {
            path: "/en",
            label: "Home"
          },
          {
            path: "/en/articles",
            label: "Articles"
          },
          {
            path: "/en/recipes",
            label: "Recipes"
          }
        ]
      : [
          {
            path: "/de",
            label: "Home"
          },
          {
            path: "/de/artikel",
            label: "Artikel"
          },
          {
            path: "/de/rezepte",
            label: "Rezepte"
          }
        ];

  return (
    <header className="layout-header" role="banner">
      <div className="container">
        <div className="region region-pre-header">
          <nav role="navigation">
            <Link to="/en">English</Link>
            {" | "}
            <Link to="/en">Deutsche</Link>
          </nav>
        </div>

        <div className="region region-header">
          <div
            id="block-umami-branding"
            className="block block-system block-system-branding-block"
          >
            <Link to="/en" title="Home" rel="home" className="site-logo">
              <img
                src="/core/profiles/demo_umami/themes/umami/logo.svg"
                alt="Home"
              />
            </Link>

            <div className="site-name visually-hidden">
              <Link to="/en" title="Home" rel="home">
                Umami Food Magazine
              </Link>
            </div>
          </div>

          <div className="menu-main-togglewrap">
            <button
              type="button"
              name="menu_toggle"
              className="menu-main-toggle"
              data-drupal-selector="menu-main-toggle"
              aria-label="Toggle the menu"
            >
              {/*<svg*/}
              {/*  width="23"*/}
              {/*  height="23"*/}
              {/*  viewBox="0 0 23 23"*/}
              {/*  xmlns="http://www.w3.org/2000/svg"*/}
              {/*  xmlns:xlink="http://www.w3.org/1999/xlink"*/}
              {/*  aria-labelledby="menu-toggle-title menu-toggle-desc"*/}
              {/*>*/}
              {/*  <title id="menu-toggle-title">Menu toggle icon</title>*/}
              {/*  <desc id="menu-toggle-desc">*/}
              {/*    Hamburger icon for menu toggle.*/}
              {/*  </desc>*/}
              {/*  <use xlink:href="#a" fill="#5F635D" />*/}
              {/*  <use*/}
              {/*    xlink:href="#a"*/}
              {/*    transform="translate(0 18)"*/}
              {/*    fill="#5F635D"*/}
              {/*  />*/}
              {/*  <use*/}
              {/*    xlink:href="#a"*/}
              {/*    transform="translate(0 9)"*/}
              {/*    fill="#5F635D"*/}
              {/*  />*/}
              {/*  <defs>*/}
              {/*    <path id="a" fill-rule="evenodd" d="M0 0h23v5H0V0z" />*/}
              {/*  </defs>*/}
              {/*</svg>*/}
            </button>
          </div>

          <nav
            role="navigation"
            aria-labelledby="block-umami-main-menu-menu"
            id="block-umami-main-menu"
            className="contextual-region block block-menu navigation menu-main__wrapper"
          >
            <h2
              className="block__title visually-hidden"
              id="block-umami-main-menu-menu"
            >
              Main navigation
            </h2>

            <ul className="menu-main" data-drupal-selector="menu-main">
              <li className="menu-main__item">
                <Link
                  to="/en"
                  className="menu-main__link is-active"
                  data-drupal-link-system-path="<front>"
                >
                  Home
                </Link>
              </li>
              <li className="menu-main__item">
                <Link
                  to="/en/articles"
                  className="menu-main__link"
                  data-drupal-link-system-path="articles"
                >
                  Articles
                </Link>
              </li>
              <li className="menu-main__item">
                <Link
                  to="/en/recipes"
                  className="menu-main__link"
                  data-drupal-link-system-path="recipes"
                >
                  Recipes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
