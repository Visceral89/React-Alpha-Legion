import React from 'react';
import './Feature.css';

const Feature = ({ title , text }) => {
  return (
    <div className="alpha__features-container__feature">
      <div className="alpha__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>

      <div className="alpha__features-container_feature-text"></div>
        {text}
    </div>
  )
}

export default Feature