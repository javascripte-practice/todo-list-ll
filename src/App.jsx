import { useState } from "react";
import Card from "./components/helper/Card/Card";
import AddTodo from "./components/UI/AddTodo/AddTodo";
import TodoList from "./components/UI/TodoList/TodoList";
function App() {
  const [users, setUsers] = useState([]);
  const deleteHandler = (u) => {
    setUsers((prevArr) => prevArr.filter((k) => u?.id !== k?.id));
  };

  return (
    <>
      <Card>
        <h1>Users List</h1>
      </Card>
      <AddTodo setUsers={setUsers} />
      <TodoList deleteHandler={deleteHandler} users={users} />
    </>
  );
}
export default App;
