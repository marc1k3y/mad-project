import { $host, $fileHost, $authHost } from "./index"

export const createPost = async (formData) => {
  const { data } = await $fileHost.post(`api/post/create`, formData)
  return data
}

export const getAll = async (limit, skip) => {
  const { data } = await $host.get(`api/post/getAll?limit=${limit}&skip=${skip}`)
  return data
}

export const likePost = async (userId, postId) => {
  const { data } = await $authHost.post(`api/post/likePost`, {
    userId, postId
  })
  return data
}

export const dislikePost = async (userId, postId) => {
  const { data } = await $authHost.post(`api/post/dislikePost`, {
    userId, postId
  })
  return data
}