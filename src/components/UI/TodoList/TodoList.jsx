import React, { useEffect, useState } from "react";
import Card from "../../helper/Card/Card";
import styles from "./TodoList.module.css";

/*
  context 3ta bosqichdan o'tishi kerak 
  1. Context Create = Contextni yaratish
  2. Provider = Contextni ulash
  3. Consumer = Contextni ishlatish
*/

const TodoList = ({ setUsers, users }) => {
  const deleteHandler = (u) => {
    setUsers((prevArr) => prevArr.filter((k) => u?.id !== k?.id));
  };

  if (!users) {
    return "loading...";
  }
  return (
    <Card>
      <ul className={styles["list"]}>
        {users?.length > 0 ? (
          users?.map((u) => {
            return (
              <li className={styles["list-item"]} key={u?.id}>
                <span>{u?.firstName}</span>
                <span>{u?.lastName}</span>
                <span>{u?.age}</span>
                <span>
                  <button
                    // onClick={() => deleteHandler(t)}
                    onClick={deleteHandler.bind(null, u)}
                    className={`${styles["btn"]} ${styles["red"]}`}
                  >
                    del
                  </button>
                </span>
              </li>
            );
          })
        ) : (
          <li className={`${styles["list-item"]} ${styles["not-found"]}`}>
            Hech qanday ma'lumot topilmadi
          </li>
        )}
      </ul>
    </Card>
  );
};

export default TodoList;
