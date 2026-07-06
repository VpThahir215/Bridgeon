import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h1>My Web</h1>
      <nav>
        <Link to={"/"}>Home2</Link>
        <Link to={'/contact2'}>Contecte2</Link>
        <Link to={'/about2'}>About2</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
