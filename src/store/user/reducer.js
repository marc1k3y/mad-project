import { ADD_LIKE, RM_LIKE, SET_USER_ID, SET_LIKED_POSTS, SET_ROLE } from "./actions"

const defaultState = {
  role: "",
  userId: "",
  likedPosts: []
}

export function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ROLE:
      return { ...state, role: action.payload }
    case SET_USER_ID:
      return { ...state, userId: action.payload }
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