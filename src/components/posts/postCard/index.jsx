import cn from "./style.module.css"
import Player from "react-player"

export const PostCard = ({ type, tag, content, desc, likes }) => {
  return (
    <div className={cn.postCardWrapper}>
      <div className={cn.tag}>
        {`#${tag}`}
      </div>
      <div className={cn.content}>
        {type === "img"
          ? <img src={content} alt="img" width="100%" />
          : <Player url={content} width="100%" height="auto" />}
      </div>
      <div className={cn.desc}>
        {desc}
      </div>
      <div className={cn.interactions}>
        {likes}
      </div>
    </div>
  )
}