import cn from "./style.module.css"

export const PostCard = ({ type, tag, content, desc, tgLink, likes }) => {
  return (
    <div className={cn.postCardWrapper} onClick={() => window.location.href = tgLink}>
      <div className={cn.tag}>
        {`#${tag}`}
      </div>
      <div className={cn.content}>
        {type === "img"
          ? <img src={content} alt="img" width="100%" />
          : <img src={content} alt="video" width="100%" />}
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