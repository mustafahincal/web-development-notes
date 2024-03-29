import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Head>
      Home
    </>
  );
}

//* we can use Head tag in next js
//* just use for page components not other components
//* this is important for SEO

//* we use index.js for default -> localhost:3000

//* if we create a file in pages, they are routed like these;
//* login.js in pages folder -> localhost:3000/login
//* signup.js in pages folder -> localhost:3000/signup

//* but if the file name is _login.js, this is not routed because of _
//* we can use _ to make normal components not page components

//* index.js in product folder in pages folder -> localhost:3000/product
//* addProduct.js in product folder in pages folder -> localhost:3000/product/addProduct
