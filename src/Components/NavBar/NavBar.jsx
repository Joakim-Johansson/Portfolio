import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
    <p>{"{  "}   Joakim Johansson   {"  }"}</p>

    <a href="mailto:joakimjohansson.dev@gmail.com">
          <div className="nav-connect">Connect with me</div>
        </a>
    </div>
  )
}

export default NavBar
