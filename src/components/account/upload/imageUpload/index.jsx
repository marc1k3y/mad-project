import cn from "./style.module.css"
import { useEffect, useState } from "react"

export const ImageUpload = () => {
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

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  return (
    <div className={cn.ImageUploadWrapper}>
      {selectedFile && <img src={preview} alt="post-pic" />}
      <label htmlFor="post-image">+</label>
      <input id="post-image" type='file' onChange={onSelectFile} />
    </div>
  )
}