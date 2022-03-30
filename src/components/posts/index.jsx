import cn from "./style.module.css"
import { PostCard } from "./postCard"
import { getAll } from "../../http/postApi"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLikedPostsAction } from "../../store/user/actions"
import { getLikedPosts } from "../../http/userApi"
import { Loader } from "../UI/loader"

export const Posts = () => {
  const dispatch = useDispatch()
  const { userId } = useSelector(state => state.user)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAll(10, 0).then((data) => setPosts(data.posts))
  }, [])

  useEffect(() => {
    setLoading(true)
    getLikedPosts(userId)
      .then((data) => dispatch(setLikedPostsAction(data.likedPosts)))
      .finally(() => setLoading(false))
  }, [dispatch, userId])

  if (loading) return <Loader />

  return (
    <div className={cn.postsWrapper}>
      {posts.map(post =>
        <PostCard
          key={post._id}
          id={post._id}
          createdAt={post.createdAt}
          type={post.contentType}
          tag={post.tag}
          content={process.env.REACT_APP_API_URL + "postsContent/" + post.content}
          desc={post.desc}
          tgLink={post.tgLink}
          likes={post.likes} />)}
    </div>
  )
}