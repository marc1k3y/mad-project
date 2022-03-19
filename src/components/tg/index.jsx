import cn from "./style.module.css"
import tgIco from "../../assets/tg.svg"

export const Tg = () => {
  return (
    <div className={cn.tgWrapper}>
      <a 
      href="https://t.me/joinchat/LyIGdJmgkxEzMWFi" 
      target="_blank"
      rel="noreferrer">
        <img src={tgIco} alt="tg" />
      </a>
    </div>
  )
}