import cn from "./style.module.css"
import { Burger } from "./burger"
import tgIco from "../../assets/tg.svg"

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
      <div className={cn.navbar}>
        <div className={cn.tg}>
          <a
            href="https://t.me/joinchat/LyIGdJmgkxEzMWFi"
            target="_blank"
            rel="noreferrer">
            <img src={tgIco} alt="tg" />
          </a>
        </div>
        <Burger />
      </div>
    </div>
  )
}