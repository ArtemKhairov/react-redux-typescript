import thunk from "redux-thunk"
import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducers"

// принимает редьюсер
// затем миддлевар
export const store = createStore(rootReducer, applyMiddleware(thunk))