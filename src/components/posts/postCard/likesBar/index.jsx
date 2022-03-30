import { useState } from "react"
import cn from "./style.module.css"

export const LikesBar = ({ likes, like, dislike, id, isLiked }) => {
  const [liked, setLiked] = useState(isLiked)
  const [counter, setCounter] = useState(likes)

  function remove() {
    setCounter(counter - 1)
    setLiked(false)
    dislike(id)
  }

  function add() {
    setCounter(counter + 1)
    setLiked(true)
    like(id)
  }

  return (
    <div className={cn.likesBarWrapper}>
      <div className={cn.btn}>
        {liked
          ? <button onClick={remove}>dislike</button>
          : <button onClick={add}>like</button>}
      </div>
      <div className={cn.counter}>
        {counter}
      </div>
    </div>
  )
}