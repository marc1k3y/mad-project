export const SET_EMAIL = "SET_EMAIL"
export const SET_LIKED_POSTS = "SET_LIKED_POSTS"
export const ADD_LIKE = "ADD_LIKE"
export const RM_LIKE = "RM_LIKE"

export const setEmailAction = (payload) => ({ type: SET_EMAIL, payload })
export const setLikedPostsAction = (payload) => ({ type: SET_LIKED_POSTS, payload })
export const addLikeAction = (payload) => ({ type: ADD_LIKE, payload })
export const rmLikeAction = (payload) => ({ type: RM_LIKE, payload })