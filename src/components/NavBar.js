import React from 'react'
import  './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (

    <>
   
    <nav className="navbar navbar-light bg-light  navtop">
    <span className="navbar-text">
    Sizes
  </span>
  
  <span className="navbar-text">
    16 Product(s) found.
  </span>
  <span className="navbar-text">
    Order by
    <select>
    <option value="select">Select</option>
    </select>
  </span>
</nav>

    </>
  )
}

export default NavBar