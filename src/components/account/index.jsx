import cn from "./style.module.css"
import { MyButton } from "../UI/button"

import avatar from "../../assets/tmp-avatar.svg"

export const Account = () => {
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
        <MyButton>upload post</MyButton>
      </div>
    </div>
  )
}