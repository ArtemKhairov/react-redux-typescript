import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../types/todo"

// https://jsonplaceholder.typicode.com/users

export const fetchTodos = (page = 1, limit = 10) => {
  // внутри делается запрос на сервер
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _page: page,
          _limit: limit
        }
      })
      // param @ts-nocheck
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data as any })
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "error message" })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page }
}