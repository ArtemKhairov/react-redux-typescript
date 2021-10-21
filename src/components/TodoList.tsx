import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идёт загрузка,пододвинься</h1>;
  }
  if (error) {
    return <h1>Error has been or ne been</h1>;
  }
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <>
            <div key={todo.id}>
              {todo.id} - {todo.title}
            </div>
          </>
        );
      })}
      <div style={{ display: "flex" }}>
        {pages.map((p) => {
          return (
            <>
              <div
                onClick={() => setTodoPage(p)}
                style={{
                  border: p === page ? "2px solid green" : "1px solid gray",
                  padding: 10,
                }}
              >
                {p}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
