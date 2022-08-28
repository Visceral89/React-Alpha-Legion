import React from 'react';
import { Feature } from '../../components';
import './WhatAlpha.css';

const WhatAlpha = () => {
  return (
    <div>
      <div className="alpha__whatalpha section__margin" id="whatalpha">
        <div className="alpha__whatalpha-feature">
          <Feature title="Who are the Alpha Legion?" text="The Alpha Legion (allegedly known as the Chaos Reasonable Marines) are basically what would happen if you gave the CIA from the 1950s onwards a Space Marine legion and told them to go nuts. " />
        </div>
        <div className="alpha__whatalpha-heading">
          <h1 className='gradient__text'>The possibilities are beyond your belief...</h1>
          <p>Explore the Black Library</p>
        </div>
        <div className="alpha__whatalpha-container">
          <Feature title="Origins" text="As with most lore, the Alpha Legion's name comes from religion. The two Primarchs, Alpharius and Omegon, represent the line Jesus said in Revelation 22:13: 'I am the Alpha and Omega, the First and the Last, the Beginning and the End.' But as Omegon is meant to be a secret, the legion is named after Alpharius. " />
          <Feature title="Tactics" text="During the Great Crusade the Ultramarines had a proverb: 'Information is victory.' What they meant to say is, 'If you know an opponent, you can defeat them.' The Alpha Legion took this doctrine and turned it up to eleven: why focus only on the intel you have? An enemy that doesn't know you (or better has nothing but carefully crafted disinformation about you) is doomed. That's pretty much what their strategy revolves around: fucking with their opponent's mind." />
          <Feature title="Leaders" text="\[.../// REDACTED ///...\]" />
        </div>
      </div>
    
    </div>
  )
}

export default WhatAlpha