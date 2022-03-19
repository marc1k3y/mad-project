import { Burger } from "./burger"
import cn from "./style.module.css"

export const Header = () => {
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        MAD
      </div>
      <div className={cn.burger}>
        <Burger />
      </div>
    </div>
  )
}