import cn from "./style.module.css"
import play from "../../../assets/play.svg"
import { likePost } from "../../../http/postApi"
import { useDispatch, useSelector } from "react-redux"

export const PostCard = ({ id, createdAt, type, tag, content, desc, tgLink, likes }) => {
  const dispatch = useDispatch()
  const { likedPosts, email } = useSelector(state => state.user)

  function dateTimeFormat() {
    const date = createdAt.slice(5, 10)
    const time = createdAt.slice(11, 16)
    return `${date.replace("-", ".")} ${time}`
  }

  function like(postId) {
    likePost(email, postId)
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
        {likes}
        <button onClick={() => like(id)}>like</button>
      </div>
    </div>
  )
}