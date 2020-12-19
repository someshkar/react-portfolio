import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <header>
      <div className='topnav'>
        <nav>
          <NavLink to='/' exact>
            Home
          </NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/artwork'>Artwork</NavLink>
          <a href='https://www.google.com'>google</a>
        </nav>
      </div>
    </header>
  );
}
