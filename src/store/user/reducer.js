import { ADD_LIKE, RM_LIKE, SET_EMAIL, SET_LIKED_POSTS } from "./actions"

const defaultState = {
  email: "",
  likedPosts: []
}

export function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload }
    case SET_LIKED_POSTS:
      return { ...state, likedPosts: action.payload }
    case ADD_LIKE:
      return { ...state, likedPosts: state.likedPosts.push(action.payload) }
    case RM_LIKE:
      return { ...state, likedPosts: state.likedPosts.filter(id => id !== action.payload) }
    default:
      return state
  }
}