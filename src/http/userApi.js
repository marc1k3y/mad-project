import { $authHost } from "./index"

export const getLikedPosts = async (userId) => {
  const { data } = await $authHost.get(`api/user/likedPosts?userId=${userId}`)
  return data
}