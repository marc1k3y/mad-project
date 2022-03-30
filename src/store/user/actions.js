export const SET_ROLE = "SET_ROLE"
export const SET_USER_ID = "SET_USER_ID"
export const SET_LIKED_POSTS = "SET_LIKED_POSTS"
export const ADD_LIKE = "ADD_LIKE"
export const RM_LIKE = "RM_LIKE"

export const setRoleAction = (payload) => ({ type: SET_ROLE, payload })
export const setUserIdAction = (payload) => ({ type: SET_USER_ID, payload })
export const setLikedPostsAction = (payload) => ({ type: SET_LIKED_POSTS, payload })
export const addLikeAction = (payload) => ({ type: ADD_LIKE, payload })
export const rmLikeAction = (payload) => ({ type: RM_LIKE, payload })