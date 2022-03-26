import cn from "./style.module.css"

export const MyInput = ({ ...props }) => {
  return (
    <input className={cn.myInput} {...props} />
  )
}