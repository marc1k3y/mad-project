import { SUCCESS, LOGOUT } from "./actions"

const defaultState = {
  isAuth: false
}

export function AuthReducer(state = defaultState, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, isAuth: true }
    case LOGOUT:
      return { ...state, isAuth: false }
    default:
      return state
  }
}