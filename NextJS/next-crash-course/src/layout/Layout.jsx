import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </React.Fragment>
  );
};

export default Layout;
