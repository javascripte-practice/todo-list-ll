import React from "react";
import Card from "../../helper/Card/Card";
import styles from "./TodoList.module.css";

const TodoList = ({ users, deleteHandler }) => {
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
