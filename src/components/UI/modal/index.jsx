import cn from "./style.module.css"
import closeIco from "../../../assets/close.svg"

export const Modal = ({ visible, close, children }) => {
  return (
    <div className={cn.modalWrapper} style={{ display: visible ? "flex" : "none" }}>
      <div className={cn.modalContent}>
        <button onClick={() => close(false)}>
          <img src={closeIco} alt="X" />
        </button>
        {children}
      </div>
    </div>
  )
}