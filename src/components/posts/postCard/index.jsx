import cn from "./style.module.css"
import play from "../../../assets/play.svg"
import { dislikePost, likePost } from "../../../http/postApi"
import { useSelector } from "react-redux"
import { LikesBar } from "./likesBar"
import { useState } from "react"

export const PostCard = ({ id, createdAt, type, tag, content, desc, tgLink, likes }) => {
  const { userId, likedPosts } = useSelector(state => state.user)
  const [btnOff, setBtnOff] = useState(false)

  function dateTimeFormat() {
    const date = createdAt.slice(5, 10)
    const time = createdAt.slice(11, 16)
    return `${date.replace("-", ".")} ${time}`
  }

  function like(postId) {
    setBtnOff(true)
    likePost(userId, postId)
      .finally(() => setBtnOff(false))
  }

  function dislike(postId) {
    setBtnOff(true)
    dislikePost(userId, postId)
      .finally(() => setBtnOff(false))
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
        <LikesBar likes={likes} like={like} dislike={dislike} id={id} btnOff={btnOff} isLiked={likedPosts.find(postId => postId === id)} />
      </div>
    </div>
  )
}