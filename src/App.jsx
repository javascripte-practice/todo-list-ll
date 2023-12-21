import { useState } from "react";
import Card from "./components/helper/Card/Card";
import AddTodo from "./components/UI/AddTodo/AddTodo";
import TodoList from "./components/UI/TodoList/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const deleteHandler = (t) => {
    setTodos((prevArr) => prevArr.filter((k) => t?.id !== k?.id));
  };

  return (
    <>
      <Card>
        <h1>Todo List</h1>
      </Card>
      <AddTodo setTodos={setTodos} />
      <TodoList deleteHandler={deleteHandler} todos={todos} />
    </>
  );
}
export default App;
