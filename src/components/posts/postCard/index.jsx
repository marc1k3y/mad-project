import cn from "./style.module.css"
import play from "../../../assets/play.svg"

export const PostCard = ({ createdAt, type, tag, content, desc, tgLink, likes }) => {
  function dateTimeFormat() {
    const date = createdAt.slice(5, 10)
    const time = createdAt.slice(11, 16)
    return `${date.replace("-", ".")} ${time}`
  }
  return (
    <div className={cn.postCardWrapper} onClick={() => window.location.href = tgLink}>
      <div className={cn.header}>
        <div className={cn.tag}>
          {`#${tag}`}
        </div>
        <div className={cn.createdAt}>
          {dateTimeFormat()}
        </div>
      </div>
      <div className={cn.content}>
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
      </div>
    </div>
  )
}