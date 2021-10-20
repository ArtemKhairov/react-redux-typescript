import axios from "axios"
import { Dispatch } from "redux"
import { UserActionTypes, UserAction } from "../../types/user"

// https://jsonplaceholder.typicode.com/users

export const fetchUsers = () => {
  // внутри делается запрос на сервер
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS })
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      // param @ts-nocheck
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data as any})
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "error message" })
    }
  }
}