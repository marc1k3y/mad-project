import cn from "./style.module.css"
import { MyButton } from "../UI/button"

import avatar from "../../assets/tmp-avatar.svg"
import { Modal } from "../UI/modal"
import { Upload } from "./upload"
import { useState } from "react"

export const Account = () => {
  const [uploadModal, setUploadModal] = useState(false)
  return (
    <div className={cn.accountWrapper}>
      <div className={cn.userInfo}>
        <div className={cn.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={cn.info}>
          <div className={cn.nickname}>
            Muller
          </div>
        </div>
      </div>
      <div className={cn.upload}>
        <MyButton onClick={() => setUploadModal(true)}>upload post</MyButton>
      </div>
      <Modal visible={uploadModal} close={setUploadModal}>
        <Upload close={setUploadModal} />
      </Modal>
    </div>
  )
}