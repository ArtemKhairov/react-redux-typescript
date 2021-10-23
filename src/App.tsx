import React from "react";
import TodoList from "./components/TodoList";
import { UserList } from "./components/UserList";

/**
 * 
 * @returns React Application
 */
function App() {
  return (
    <>
      <div>
        <UserList />
        {/* <hr/> */}
        {/* <TodoList /> */}
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
