import cn from "./style.module.css"
import { privateLinks, publicLinks } from "./links"
import { NavLink, useLocation } from "react-router-dom"
import { MyButton } from "../../../UI/button"
import tgIco from "../../../../assets/tg.svg"
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../../../../store/auth/actions"

export const Navbar = ({ visible, close }) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.auth)

  function logout() {
    dispatch(logoutAction())
    localStorage.removeItem("token")
  }
  return (
    <div className={visible ? cn.navbarWrapper : cn.off}>
      <div className={cn.links}>
        {isAuth
          ?
          privateLinks.map(link =>
            <NavLink
              onClick={() => close(false)}
              style={{ backgroundColor: link.to === pathname && "whitesmoke", color: link.to === pathname && "red" }}
              key={link.to}
              to={link.to}>
              {link.title}
            </NavLink>)
          : publicLinks.map(link =>
            <NavLink
              onClick={() => close(false)}
              style={{ backgroundColor: link.to === pathname && "whitesmoke", color: link.to === pathname && "red" }}
              key={link.to}
              to={link.to}>
              {link.title}
            </NavLink>)}
      </div>
      <div className={cn.bottomBar}>
        <div className={cn.socialLinks}>
          <div className={cn.tg}>
            <a
              href="https://t.me/joinchat/LyIGdJmgkxEzMWFi"
              target="_blank"
              rel="noreferrer">
              <img src={tgIco} alt="tg" />
            </a>
          </div>
        </div>
        {isAuth && <MyButton onClick={logout}>Logout</MyButton>}
      </div>
    </div >
  )
}