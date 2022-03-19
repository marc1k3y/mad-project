import cn from "./style.module.css"
import { Burger } from "./burger"

export const Header = () => {
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        <div className={cn.emoji}>
          👺
        </div>
        <div className={cn.title}>
          MAD
        </div>
      </div>
      <div className={cn.burger}>
        <Burger />
      </div>
    </div>
  )
}