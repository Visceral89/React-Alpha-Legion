import React from 'react';
import { google,slack,shopify,dropbox } from './imports';
import './Brand.css';

const Brand = () => {
  return (
    <div className="alpha__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}

export default Brand