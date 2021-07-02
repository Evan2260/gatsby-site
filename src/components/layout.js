import * as React from 'react'
import { Link } from 'gatsby'
import { container,
        heading,
        navLinks,
        navLinkItem,
        navLinkText,
} from './layout.module.css'

const Layout = ({ pageTile, children }) => {
  return(
    <main className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              About Page
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTile}</h1>
        {children}
    </main>
  )
};

export default Layout
