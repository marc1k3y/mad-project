import cn from "./style.module.css"
import { useState } from "react"
import { MyButton } from "../../UI/button"
import { ImageUpload } from "./imageUpload"

export const Upload = () => {
  const [tag, setTag] = useState("lol")
  const [desc, setDesc] = useState("")

  return (
    <div className={cn.uploadWrapper}>
      <div className={cn.tag}>
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="lol">lol</option>
          <option value="news">news</option>
          <option value="fapfap">fapfap</option>
        </select>
      </div>
      <ImageUpload />
      <div className={cn.desc}>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <MyButton>Post</MyButton>
    </div>
  )
}