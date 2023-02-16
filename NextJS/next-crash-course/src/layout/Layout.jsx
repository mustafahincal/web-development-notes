import React from "react";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Meta />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
