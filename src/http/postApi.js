import { $fileHost } from "./index"

export const createPost = async (formData) => {
  const { data } = await $fileHost.post(`api/post/create`, formData)
  return data
}
