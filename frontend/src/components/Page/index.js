import React from "react";

const Page = props => {
  const {
    title,
    path,
    pageContext: {
      nav,
      language,
    }
  } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>Path: {path}</p>
      <h2>Navigation</h2>
      <div dangerouslySetInnerHTML={{ __html: nav }} />
    </article>
  );
};

export default Page;
