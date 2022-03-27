import cn from "./style.module.css"
import { useState } from "react"
import { MyButton } from "../../UI/button"
import { MyInput } from "../../UI/input"
import { ImageUpload } from "./imageUpload"

export const Upload = () => {
  const [type, setType] = useState(true)
  const [tag, setTag] = useState("lol")
  const [desc, setDesc] = useState("")

  return (
    <div className={cn.uploadWrapper}>
      <div className={cn.contentType}>
        <div onClick={() => setType(true)} style={{ backgroundColor: type && "red", color: type ? "white" : "red" }}>image</div>
        <div onClick={() => setType(false)} style={{ backgroundColor: !type && "red", color: !type ? "white" : "red" }}>video</div>
      </div>
      <div className={cn.tag}>
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="lol">lol</option>
          <option value="news">news</option>
          <option value="fapfap">fapfap</option>
        </select>
      </div>
      <ImageUpload />
      <div className={cn.desc}>
        <MyInput type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <MyButton>Post</MyButton>
    </div>
  )
}