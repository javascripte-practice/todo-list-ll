import React, { useContext } from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import AppContext from "../../../../context/appContext";

const Header = () => {
  const ctx = useContext(AppContext);
  return (
    <div className={styles["header-box"]}>
      <h2>Page</h2>
      {ctx.username && <h4>{ctx.username}</h4>}
      <Navbar />
    </div>
  );
};

export default Header;
