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
          <NavLink to='/resume.pdf' target='_blank'>
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
