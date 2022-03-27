import cn from "./style.module.css"
import { useState } from "react"
import { MyButton } from "../../UI/button"
import { MyInput } from "../../UI/input"
import { ImageUpload } from "./imageUpload"
import { createPost } from "../../../http/postApi"

export const Upload = ({ close }) => {
  const [type, setType] = useState(true)
  const [tag, setTag] = useState("lol")
  const [content, setContent] = useState(undefined)
  const [desc, setDesc] = useState("")
  const [sended, setSended] = useState(false)

  function sendPost() {
    if (content) {
      const formData = new FormData()
      formData.append("contentType", type ? "img" : "video")
      formData.append("tag", tag)
      formData.append("content", content)
      formData.append("desc", desc)
      createPost(formData)
        .then(() => {
          close(false)
          setDesc("")
          setSended(true)
        })
    }
  }

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
      <ImageUpload setContent={setContent} sended={sended} />
      <div className={cn.desc}>
        <MyInput type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <MyButton onClick={sendPost}>Post</MyButton>
    </div>
  )
}