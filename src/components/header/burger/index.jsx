import { useState } from "react"
import { Navbar } from "./navbar"
import cn from "./style.module.css"

export const Burger = () => {
  const [show, setShow] = useState(false)
  return (
    <div className={cn.burgerWrapper}>
      <div className={cn.burger} onClick={() => setShow(!show)} style={{gap: show && "0px"}}>
        <div className={cn.fLine} style={{ backgroundColor: show && "red", transform: show && "rotate(45deg)" }}></div>
        <div className={cn.sLine} style={{ display: show && "none" }}></div>
        <div className={cn.tLine} style={{ background: show && "red", transform: show && "rotate(-45deg)" }}></div>
      </div>
      <Navbar visible={show} close={setShow} />
    </div>
  )
}