import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <img />
      <section>
        <div className='intro'>
          <h1 className='blueText introHeader'>Hello!</h1>
          <h1 className='introSubheader'>
            I'm Pulkit Garg, a student and Game Developer working passionately
            to create immersive interactions.
          </h1>
          <Link to='/projects' className='blueText projectText'>
            See some of my work →
          </Link>
        </div>
      </section>
    </main>
  );
}
