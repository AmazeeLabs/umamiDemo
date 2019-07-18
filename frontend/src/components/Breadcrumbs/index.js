import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

const Breadcrumbs = ({ links = [] }) => (
  <nav role="navigation" aria-labelledby="breadcrumb">
    <h2 id="breadcrumb" className={styles.Title}>
      Breadcrumb
    </h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {links.map(link => (
        <li>
          <Link to={link.url}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;
