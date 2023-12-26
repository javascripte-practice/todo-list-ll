import { useState } from "react";
import Layout from "./components/helper/Layout/Layout";
import Card from "./components/helper/Card/Card";
import AddTodo from "./components/UI/AddTodo/AddTodo";
import TodoList from "./components/UI/TodoList/TodoList";
import Login from "./components/UI/Login/Login";
import AppContext from "./context/appContext";
// import AddTodo1 from "./components/UI/AddTodo/AddTodo1";

/*
  Context 3 bosqichli bo'ladi.
  1. Contextni yaratish - Create Context;
  2. Context bilan taminlash - Context Provide
  3. Contextdan foydalanish - Context Consume 
*/

function App() {
  const [users, setUsers] = useState([]);
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
    <AppContext.Provider value={{ username, isVerify }}>
      <Layout logOut={logOut}>
        <Card>
          <h1>Users List</h1>
        </Card>
        {!isVerify && <Login loginData={loginData} />}
        {isVerify && (
          <>
            <AddTodo setUsers={setUsers} />
            <TodoList users={users} setUsers={setUsers} />
          </>
        )}
      </Layout>
    </AppContext.Provider>
  );
}
export default App;
