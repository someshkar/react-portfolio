import React from 'react';
export default function Footer() {
  return (
    <footer>
      <div className='footer'>
        <a href='mailto:pulkitgarg784@gmail.com' className='socialicons'>
          <img
            height='22'
            width='22'
            src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/gmail.svg'
          />
        </a>
        <a
          href='https://www.facebook.com/real.pulkit.garg'
          className='socialicons'
        >
          <img
            height='22'
            width='22'
            src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/facebook.svg'
          />
        </a>
        <a href='https://github.com/pulkitgarg784' className='socialicons'>
          <img
            height='22'
            width='22'
            src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg'
          />
        </a>
        <a href='https://www.artstation.com/pulkitgarg' className='socialicons'>
          <img
            height='22'
            width='22'
            src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/artstation.svg'
          />
        </a>
        <a href='https://pulkitgarg.itch.io/' className='socialicons'>
          <img
            height='22'
            width='22'
            src='https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/itch-dot-io.svg'
          />
        </a>
      </div>
    </footer>
  );
}
