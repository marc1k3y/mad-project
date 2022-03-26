import cn from "./style.module.css"

export const MyButton = ({ children, ...props }) => {
  return (
    <button className={cn.myButton} {...props}>
      {children}
    </button>
  )
}