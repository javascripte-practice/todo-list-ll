import React, { useState } from "react";
import Card from "../../helper/Card/Card";
import styles from "./Login.module.css";

const Login = ({ loginData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target?.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      username,
      password,
    };
    loginData(obj);
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={styles["form"]}>
        <label>
          <input type="text" placeholder="Username" onChange={changeUsername} />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            onChange={changePassword}
          />
        </label>
        <button>Login</button>
      </form>
    </Card>
  );
};

export default Login;
