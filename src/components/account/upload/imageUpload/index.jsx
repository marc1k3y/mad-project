import cn from "./style.module.css"
import { useEffect, useState } from "react"
import play from "../../../../assets/play.svg"

export const ImageUpload = ({ setContent, sended, isVideo }) => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  useEffect(() => {
    setContent(selectedFile)
  }, [selectedFile, setContent])

  useEffect(() => {
    sended && setSelectedFile(undefined)
  }, [sended])

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  return (
    <div className={cn.ImageUploadWrapper} style={{ border: !selectedFile && "5px solid gray", borderRadius: !selectedFile && "25px" }}>
      {selectedFile
        ? <div className={cn.preview}>
          <button className={cn.deleteFile} onClick={() => setSelectedFile(undefined)}>cancel</button>
          <img src={preview} alt="post-pic" />
          {isVideo && <div className={cn.playBtn}>
            <img src={play} alt="play" />
          </div>}
        </div>
        : <label htmlFor="post-image">+</label>}
      <input name="content" id="post-image" type='file' onChange={onSelectFile} />
    </div>
  )
}