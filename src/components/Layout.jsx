import { Link } from 'gatsby'
import React from 'react'
import { container, navLinks, navLinkItems, heading } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
		<div className={container}>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItems}>
						<Link to = "/">Home</Link>
					</li>
					<li className={navLinkItems}>
						<Link to = "/about">About</Link>
					</li>
				</ul>
			</nav>
			<h1 className={heading}>{pageTitle}</h1>
			{children}
		</div>
  )
}

export default Layout