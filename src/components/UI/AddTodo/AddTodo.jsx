import React, { useState } from "react";
import Card from "../../helper/Card/Card";
import styles from "./AddTodo.module.css";
// props = properties
const AddTodo = ({ setTodos }) => {
  const [changeTodo, setChangeTodo] = useState("");
  //   const [a, b, _, s] = [1, 3, 5, 7];
  //   const { setTodos: todos } = { setTodos: "setTodos" };
  //   const { setTodos: todos } = { setTodos: "setTodos" };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.children[0].children[0].value);
    const newTodo = {
      id: Date.now().toString(),
      todo: changeTodo,
    };
    setTodos((prevArr) => {
      return [...prevArr, newTodo];
    });
    setChangeTodo("");
  };
  return (
    <Card variant={"green"}>
      <form className={styles["form"]} onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            placeholder="Todo..."
            className={styles["inputs"]}
            onChange={(e) => {
              setChangeTodo(e.target.value);
            }}
            value={changeTodo}
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
