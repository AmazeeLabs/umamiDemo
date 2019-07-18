import React from "react";

const Recipe = props => {
  const {
    // nid,
    // nodeType,
    // published,
    created,
    // createdUnix,
    // changed,
    // changedUnix,
    user,
    title,
    body,
    image,
    tags
  } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>Published on {created.split("T")[0]}</p>
      <div dangerouslySetInnerHTML={{ __html: body.value }} />
    </article>
  );
};

export default Recipe;
