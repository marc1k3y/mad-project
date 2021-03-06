import { createStore, combineReducers } from "redux"
import { AuthReducer } from "./auth/reducer"
import { UserReducer } from "./user/reducer"

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer
})

export const store = createStore(rootReducer)