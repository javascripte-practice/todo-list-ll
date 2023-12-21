import React from "react";
import Card from "../../helper/Card/Card";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteHandler }) => {
  return (
    <Card>
      <ul className={styles["list"]}>
        {todos?.length > 0 ? (
          todos?.map((t) => {
            return (
              <li className={styles["list-item"]} key={t?.id}>
                <span>{t?.todo}</span>
                <span>
                  {/* <button
                  onClick={() => console.log(t?.id, "update")}
                  className={`${styles["btn"]} ${styles["yellow"]}`}
                >
                  edit
                </button> */}
                  <button
                    // onClick={() => deleteHandler(t)}
                    onClick={deleteHandler.bind(null, t)}
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
