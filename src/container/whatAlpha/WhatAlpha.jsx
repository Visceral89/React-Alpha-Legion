import React from 'react';
import { Feature } from '../../components';
import './WhatAlpha.css';

const WhatAlpha = () => {
  return (
    <div>
      <div className="alpha__whatalpha section__margin" id="whatalpha">
        <div className="alpha__whatalpha-feature">
          <Feature title="Who are the Alpha Legion?" text="Alpha Legion are a group of the Adeptus Astartes, totally loyal to the Emperor of Mankind. Matter of fact you better not ask anything else." />
        </div>
        <div className="alpha__whatalpha-heading">
          <h1 className='gradient__text'>The possibilities are beyond your belief...</h1>
          <p>Explore the Black Library</p>
        </div>
        <div className="alpha__whatalpha-container">
          <Feature title="" text="" />
          <Feature title="" text="" />
          <Feature title="" text="" />
        </div>
      </div>
    
    </div>
  )
}

export default WhatAlpha