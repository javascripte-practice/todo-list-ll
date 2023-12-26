import React from "react";
import Header from "./Herader/Header";

const Layout = (props) => {
  return (
    <div>
      <Header logOut={props.logOut} />
      {props.children}
    </div>
  );
};

export default Layout;
