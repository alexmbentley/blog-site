import React, { useState } from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current)
    console.log(isActive, "<< is active")
    // 👇️ or set to true
    // setIsActive(true);
  }

  return (
    <header>
      <nav className={headerStyles.navbar}>
        <Link to="/">
          <StaticImage
            className={headerStyles.logo}
            src="../pictures/Logo.png"
            alt="NFTeaser Logo"
            placeholder="none"
          />
        </Link>

        <ul className={isActive ? headerStyles.navList2 : headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div
          onClick={() => setIsActive(current => !current)}
          className={headerStyles.menu}
        >
          <div className={headerStyles.menuLine}></div>
          <div className={headerStyles.menuLine}></div>
          <div className={headerStyles.menuLine}></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
