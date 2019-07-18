import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "components/Header";

import "css/html-normalize.module.css";
import "css/html-root.module.css";
import "css/html-links.module.css";
import "css/html-headings.module.css";
import "css/html-text.module.css";
import "css/html-grouping.module.css";
import "css/html-embedded.module.css";
import "css/html-forms.module.css";
import "css/html-tables.module.css";
import "css/visuallyHidden.module.css";

const Layout = ({ children, title, language }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {/*<Header language={language} />*/}

    <main>{children}</main>

    {/* Recipe collections */}
    {/* About / contact */}
    <footer>
      <p>
        Umami Magazine &amp; Umami Publications is a fictional magazine and
        publisher for illustrative purposes only.
      </p>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
