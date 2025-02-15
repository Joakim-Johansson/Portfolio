import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
    <p>{"{  "}   Joakim Johansson   {"  }"}</p>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect with me</div>

    </div>
  )
}

export default NavBar
