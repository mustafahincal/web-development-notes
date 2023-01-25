import Image from "next/image";
import React from "react";
import test from "../../public/test.jpeg";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            margin: "15px",
            backgroundColor: "white",
            color: "black",
            padding: "20px",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "block" }}> {product.name} </span>
          <span style={{ display: "block" }}> {product.price} </span>
        </div>
      ))}
      <Image style={{ display: "block" }} src={test} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default Products;
