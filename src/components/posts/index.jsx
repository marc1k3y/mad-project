import cn from "./style.module.css"
import { posts } from "./data"
import { PostCard } from "./postCard"

export const Posts = () => {
  return (
    <div className={cn.postsWrapper}>
      {posts.map(post =>
        <PostCard
          key={post.id}
          type={post.type}
          tag={post.tag}
          content={post.content}
          desc={post.desc}
          likes={post.likes} />)}
    </div>
  )
}