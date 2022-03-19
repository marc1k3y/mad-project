import cn from "./style.module.css"
import { links } from "./links"
import { NavLink, useLocation } from "react-router-dom"

export const Navbar = ({ visible, close }) => {
  const { pathname } = useLocation()
  return (
    <div className={visible ? cn.navbarWrapper : cn.off}>
      {links.map(link =>
        <NavLink
          onClick={() => close(false)}
          style={{ backgroundColor: link.to === pathname && "whitesmoke", color: link.to === pathname && "red" }}
          key={link.to}
          to={link.to}>
          {link.title}
        </NavLink>)
      }
    </div >
  )
}