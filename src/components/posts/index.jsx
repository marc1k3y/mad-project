import cn from "./style.module.css"
import { PostCard } from "./postCard"
import { getAll } from "../../http/postApi"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLikedPostsAction } from "../../store/user/actions"
import { getLikedPosts } from "../../http/userApi"

export const Posts = () => {
  const dispatch = useDispatch()
  const { email } = useSelector(state => state.user)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAll(10, 0).then((data) => setPosts(data.posts))
  }, [])

  useEffect(() => {
    getLikedPosts(email)
      .then((data) => dispatch(setLikedPostsAction(data.likedPosts)))
  }, [dispatch, email])

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