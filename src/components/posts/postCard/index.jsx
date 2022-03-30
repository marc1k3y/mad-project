import cn from "./style.module.css"
import play from "../../../assets/play.svg"
import { dislikePost, likePost } from "../../../http/postApi"
import { useSelector } from "react-redux"
import { LikesBar } from "./likesBar"

export const PostCard = ({ id, createdAt, type, tag, content, desc, tgLink, likes }) => {
  const { email, likedPosts } = useSelector(state => state.user)

  function dateTimeFormat() {
    const date = createdAt.slice(5, 10)
    const time = createdAt.slice(11, 16)
    return `${date.replace("-", ".")} ${time}`
  }

  function like(postId) {
    likePost(email, postId)
  }

  function dislike(postId) {
    dislikePost(email, postId)
  }

  return (
    <div className={cn.postCardWrapper}>
      <div className={cn.header}>
        <div className={cn.tag}>
          {`#${tag}`}
        </div>
        <div className={cn.createdAt}>
          {dateTimeFormat()}
        </div>
      </div>
      <div className={cn.content} onClick={() => window.location.href = tgLink}>
        <div className={cn.postImg}>
          <img src={content} alt="img" />
          {type === "video" && <div className={cn.playBtn}>
            <img src={play} alt="play" />
          </div>}
        </div>
      </div>
      <div className={cn.desc}>
        {desc}
      </div>
      <div className={cn.interactions}>
        <LikesBar likes={likes} like={like} dislike={dislike} id={id} isLiked={likedPosts.find(postId => postId === id)} />
      </div>
    </div>
  )
}