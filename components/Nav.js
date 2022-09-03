import Image from "next/image"
import logo from "../public/img/logoRiver.png"
import navStyles from "../styles/Nav.module.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Nav = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  console.log(toggleSidebar)
  return (
    <div>
      <nav id='navbar' className={navStyles.navbar}>
        <div className={navStyles.imgWrapper}>
          <Image src={logo}></Image>
        </div>
        <ul className={navStyles.navLinks}>
          <li>
            <a>Información</a>
          </li>
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
        <div>
          <GiHamburgerMenu
            className={navStyles.menu}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
        </div>
      </nav>
      {/* <div>
        <aside
          className={`${toggleSidebar ? "sidebar show-sidebar" : "sidebar"}`}
        >
          <ul>
            <li>
              <a>Información</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </aside>
      </div> */}
    </div>
  )
}
export default Nav
