import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import AppContext from "../../../../context/appContext";
const Navbar = () => {
  /*
  return (
    <AppContext.Consumer>
      {(ctx) => {
        return (
          <ul className={styles["list"]}>
            <li>About</li>
            {ctx.isVerify && <li>Home</li>}
            {ctx.isVerify && <li>Servises</li>}
            {ctx.isVerify && <li>Contacts</li>}
            {ctx.isVerify && (
              <li>
                <button className={styles["btn"]} onClick={logOut}>
                  Log Out
                </button>
              </li>
            )}
          </ul>
        );
      }}
    </AppContext.Consumer>
  );
   */
  const ctx = useContext(AppContext);

  return (
    <ul className={styles["list"]}>
      <li>About</li>
      {ctx.isVerify && <li>Home</li>}
      {ctx.isVerify && <li>Servises</li>}
      {ctx.isVerify && <li>Contacts</li>}
      {ctx.isVerify && (
        <li>
          <button className={styles["btn"]} onClick={ctx.onLogout}>
            Log Out
          </button>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
