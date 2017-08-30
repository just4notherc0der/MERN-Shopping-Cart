import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li><a href='#'>about</a></li>
        <li><a href='#'>contact</a></li>
        <li><a href='#'>cart</a></li>
        <li><a href='#'>admin</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
