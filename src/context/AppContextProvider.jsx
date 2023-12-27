import React, { useState } from "react";
import AppContext from "./appContext";

const AppContextProvider = (props) => {
  const [isVerify, setIsVerify] = useState(false);
  const [username, setUsername] = useState("");
  const logOut = () => {
    setIsVerify(false);
  };
  const loginData = ({ username, password }) => {
    if (!username.trim() || !password.trim()) {
      setIsVerify(false);
      setUsername("");
      return;
    } else {
      setIsVerify(true);
      setUsername(username);
    }
  };
  return (
    <AppContext.Provider
      value={{ isVerify, username, onLogin: loginData, onLogout: logOut }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
