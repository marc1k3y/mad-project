import { $host, $fileHost } from "./index"

export const createPost = async (formData) => {
  const { data } = await $fileHost.post(`api/post/create`, formData)
  return data
}

export const getAll = async (limit, skip) => {
  const { data } = await $host.get(`api/post/getAll?limit=${limit}&skip=${skip}`)
  return data
}