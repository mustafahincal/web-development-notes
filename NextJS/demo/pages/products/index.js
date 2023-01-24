import Head from "next/head";
import React from "react";
import _productList from "./_productList";

const index = () => {
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product Page" />
      </Head>
      product/index;
      <_productList />
    </>
  );
};

export default index;
