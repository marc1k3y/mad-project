import { useState } from "react"
import { Navbar } from "./navbar"
import cn from "./style.module.css"

export const Burger = () => {
  const [show, setShow] = useState(false)
  return (
    <div className={cn.burgerWrapper}>
      <div className={cn.burger} onClick={() => setShow(!show)}>
        <div className={cn.topBun} style={{ marginBottom: show && "3px" }}></div>
        <div className={cn.cheese}></div>
        <div className={cn.middle} style={{ marginTop: show && "3px" }}></div>
        <div className={cn.botBun} style={{ marginTop: show && "3px" }}></div>
      </div>
      <Navbar visible={show} close={setShow} />
    </div>
  )
}