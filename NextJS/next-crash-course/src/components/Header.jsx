import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>Header</h1>
      <div
        style={{ backgroundColor: "white", color: "black", padding: "20px" }}
      >
        <span
          style={{
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <Link href="/">Home</Link>
        </span>
        <span
          style={{
            margin: "0 20px",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <Link href="/about">About</Link>
        </span>
        <span
          style={{
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <Link href="/products">Products</Link>
        </span>
      </div>
    </div>
  );
};

//* we can change url with Link

export default Header;
