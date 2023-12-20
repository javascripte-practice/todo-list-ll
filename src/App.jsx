import Card from "./components/helper/Card/Card";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    { id: "i1k", todo: "Howeworks and sports" },
    { id: "i2k", todo: "House works and lunch" },
    { id: "i3k", todo: "Treveling and Thinking" },
  ]);
  return (
    <>
      <Card>
        <h1>Todo List</h1>
      </Card>
      <Card variant={"green"}>
        <form className={styles["form"]} onSubmit={(e) => e.preventDefault()}>
          <label>
            <input
              type="text"
              placeholder="Todo..."
              className={styles["inputs"]}
            />
          </label>
          <button type="submit" className={styles["btn"]}>
            Save
          </button>
        </form>
      </Card>
      <Card>
        <ul className={styles["list"]}>
          {todos?.length > 0 ? (
            todos?.map((t) => {
              return (
                <li className={styles["list-item"]}>
                  <span>{t?.todo}</span>
                  <span>
                    <button
                      onClick={() => console.log(t?.id, "update")}
                      className={`${styles["btn"]} ${styles["yellow"]}`}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => console.log(t?.id, "delete")}
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
    </>
  );
}
export default App;
