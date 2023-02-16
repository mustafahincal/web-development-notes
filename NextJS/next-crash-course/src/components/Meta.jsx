import Head from "next/head";
import React from "react";

const Meta = ({ description, title, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="mustafahincal" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

//* we can give default props for new pages
Meta.defaultProps = {
  title: "User List Website",
  keywords: "js, html, css, nextjs",
  description: "next js is awesome",
};

export default Meta;
