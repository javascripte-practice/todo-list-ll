import React, { useState, useReducer } from "react";
import Card from "../../helper/Card/Card";
import styles from "./AddTodo.module.css";
import { userReducer } from "./utils/userReducer";
import { initialUser } from "./utils/initialData";
import { FIRST_NAME, LAST_NAME, AGE, RESET_USER } from "./utils/constants";

const AddTodo = ({ setUsers }) => {
  const [user, dispatchUser] = useReducer(userReducer, initialUser);

  const changeFNameHandler = (e) => {
    const value = e?.target?.value;
    dispatchUser({ type: FIRST_NAME, payload: value });
  };
  const changeLNameHandler = (e) => {
    const value = e?.target?.value;
    dispatchUser({ type: LAST_NAME, payload: value });
  };
  const changeAgeHandler = (e) => {
    const value = e?.target?.value;
    dispatchUser({ type: AGE, payload: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const firstName = user?.firstName?.val?.trim();
    const lastName = user?.lastName?.val?.trim();
    const age = user?.age?.val?.trim();
    const newPerson = {
      id: Date.now().toString(),
      firstName,
      lastName,
      age,
    };
    setUsers((prevUsers) => [...prevUsers, newPerson]);
    dispatchUser({ type: RESET_USER });
  };
  return (
    <Card variant={"grey"}>
      <form className={styles["form"]} onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            placeholder="FirstName"
            className={`${styles["inputs"]} ${
              user?.firstName?.err ? styles["err"] : ""
            } ${user?.firstName?.succ ? styles["succ"] : ""}`}
            onChange={changeFNameHandler}
            value={user?.firstName?.val}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="LastName"
            className={`${styles["inputs"]} ${
              user?.lastName?.err ? styles["err"] : ""
            } ${user?.lastName?.succ ? styles["succ"] : ""}`}
            onChange={changeLNameHandler}
            value={user?.lastName?.val}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Age"
            className={`${styles["inputs"]} ${
              user?.age?.err ? styles["err"] : ""
            } ${user?.age?.succ ? styles["succ"] : ""}`}
            onChange={changeAgeHandler}
            value={user?.age?.val}
          />
        </label>
        <button type="submit" className={styles["btn"]}>
          Save
        </button>
      </form>
    </Card>
  );
};

export default AddTodo;
