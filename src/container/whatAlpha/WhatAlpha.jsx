import React from 'react';
import { Feature } from '../../components';
import './WhatAlpha.css';

const WhatAlpha = () => {
  return (
    <div>
      <div className="alpha__whatalpha section__margin" id="whatalpha">
        <div className="alpha__whatalpha-feature">
          <Feature />
        </div>
        <div className="alpha__whatalpha-heading">
          <h1 className='gradient__text'>The possibilities are beyond your belief...</h1>
          <p>Explore the Black Library</p>
        </div>
        <div className="alpha__whatalpha-container">
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    
    </div>
  )
}

export default WhatAlpha