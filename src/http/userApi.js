import { $authHost } from "./index"

export const getLikedPosts = async (email) => {
  const { data } = await $authHost.get(`api/user/likedPosts?email=${email}`)
  return data
}