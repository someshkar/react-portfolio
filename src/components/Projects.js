import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <main>
      <img />
      <section>
        <div className='intro'>
          <h1 className='blueText introHeader'>Coming Soon!</h1>
          <Link to='/' className='blueText projectText'>
            Go home →
          </Link>
        </div>
      </section>
    </main>
  );
}
